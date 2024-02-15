import type { Actions } from '@sveltejs/kit'
import type { registerDto } from '../schemas'
import { createUser, getUserByEmail, getUserByUsername } from '$lib/server/models/user'
import { validateAction, hashPassword } from '$lib'
import { createSession } from '$lib/server/models/session'
import { fail, redirect } from '@sveltejs/kit'
import { registerSchema } from '../schemas'
import { NODE_ENV } from '$env/static/private'

export const actions: Actions = {
    default: async ({ request, cookies }) => {
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
    }
}
