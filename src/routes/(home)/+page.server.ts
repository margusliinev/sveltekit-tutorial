import type { ServerLoad, Actions } from '@sveltejs/kit'
import type { registerDto, loginDto } from './schemas'
import { createUser, getUserByEmail, getUserByEmailWithPassword, getUserByUsername } from '$lib/server/models/user'
import { validateAction, hashPassword, verifyPassword } from '$lib'
import { registerSchema, loginSchema } from './schemas'
import { createSession } from '$lib/server/models/session'
import { NODE_ENV, DOMAIN } from '$env/static/private'
import { redirect, fail } from '@sveltejs/kit'

export const load: ServerLoad = async ({ cookies }) => {
    const session = cookies.get('__session')
    if (session) throw redirect(303, '/dashboard')
}

export const actions: Actions = {
    setTheme: async ({ cookies, url }) => {
        const theme = url.searchParams.get('theme')
        const redirectTo = url.searchParams.get('redirectTo')

        if (!theme || !redirectTo) {
            console.error('Missing theme or redirectTo parameter')
            throw redirect(303, '/')
        }

        if (theme !== 'dark' && theme !== 'light') {
            console.error('Invalid theme parameter:', theme)
            throw redirect(303, '/')
        }

        cookies.set('theme', theme, {
            path: '/',
            sameSite: 'lax',
            httpOnly: true,
            maxAge: 365 * 24 * 60 * 60,
            secure: NODE_ENV === 'production'
        })

        const redirectToURL = new URL(redirectTo)
        if (redirectToURL.hostname === DOMAIN) {
            throw redirect(303, redirectToURL.pathname)
        } else {
            console.error('Invalid redirect URL:', redirectTo)
            throw redirect(303, '/')
        }
    },
    register: async ({ request, cookies }) => {
        const { body, errors } = await validateAction<registerDto>({ request, schema: registerSchema })
        if (errors) return fail(400, errors)

        const existingUsername = await getUserByUsername(body.username)
        if (existingUsername) return fail(400, { username: 'Username is already in use' })

        const existingEmail = await getUserByEmail(body.email)
        if (existingEmail) return fail(400, { email: 'Email is already in use' })

        const hashedPassword = await hashPassword(body.password)
        if (!hashedPassword) return fail(500, { error: 'Failed to hash password' })

        const newUser = await createUser({ ...body, password: hashedPassword })
        if (!newUser) return fail(500, { error: 'Failed to create user' })

        const session = await createSession(newUser.id)
        if (!session) return fail(500, { error: 'Failed to create session' })

        cookies.set('__session', session.id, {
            path: '/',
            sameSite: 'lax',
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60,
            secure: NODE_ENV === 'production'
        })

        throw redirect(302, '/dashboard')
    },
    login: async ({ request, cookies }) => {
        const { body, errors } = await validateAction<loginDto>({ request, schema: loginSchema })
        if (errors) return fail(400, errors)

        const user = await getUserByEmailWithPassword(body.email)
        if (!user) return fail(400, { error: 'Email or password is incorrect' })

        const passwordMatch = await verifyPassword(body.password, user.password)
        if (!passwordMatch) return fail(500, { error: 'Email or password is incorrect' })

        const session = await createSession(user.id)
        if (!session) return fail(500, { error: 'Failed to create session' })

        cookies.set('__session', session.id, {
            path: '/',
            sameSite: 'lax',
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60,
            secure: NODE_ENV === 'production'
        })

        throw redirect(302, '/dashboard')
    },
    logout: async ({ cookies }) => {
        cookies.delete('__session', { path: '/' })
        return redirect(303, '/login')
    }
}
