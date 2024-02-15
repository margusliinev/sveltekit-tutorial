import type { Actions } from '@sveltejs/kit'
import type { loginDto } from '../schemas'
import { getUserByEmailWithPassword } from '$lib/server/models/user'
import { createSession } from '$lib/server/models/session'
import { validateAction, verifyPassword } from '$lib'
import { redirect, fail } from '@sveltejs/kit'
import { loginSchema } from '../schemas'
import { NODE_ENV } from '$env/static/private'

export const actions: Actions = {
    default: async ({ request, cookies }) => {
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
    }
}
