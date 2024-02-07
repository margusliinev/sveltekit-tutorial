import type { Actions } from '@sveltejs/kit'
import { getUserByEmailWithPassword } from '$lib/server/models/user'
import { createSession } from '$lib/server/models/session'
import { fail, redirect } from '@sveltejs/kit'
import { validateAction } from '$lib'
import { verifyPassword } from '$lib/server/models/auth'
import { env } from '$env/dynamic/private'
import { z } from 'zod'

const loginSchema = z.object({
    email: z.string({ invalid_type_error: 'Email is invalid' }).min(1, { message: 'Email is required' }).email({ message: 'Email is invalid' }),
    password: z.string({ invalid_type_error: 'Password is invalid' }).min(1, { message: 'Password is required' })
})

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const { body, errors } = await validateAction<z.infer<typeof loginSchema>>({ request, schema: loginSchema })
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
            secure: env.NODE_ENV === 'production'
        })

        throw redirect(302, '/dashboard')
    }
}
