import type { Actions } from '@sveltejs/kit'
import { createUser, getUserByEmail, getUserByUsername } from '$lib/server/models/user'
import { validateAction, hashPassword } from '$lib'
import { createSession } from '$lib/server/models/session'
import { fail, redirect } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'
import { z } from 'zod'

const registerSchema = z.object({
    username: z
        .string({ invalid_type_error: 'Username is invalid' })
        .min(3, { message: 'Username must be between 3 and 39 characters' })
        .max(39, { message: 'Username must be between 3 and 39 characters' })
        .regex(/^[^-].*[^-]$/, { message: 'Username cannot start or end with a hyphen' })
        .regex(/^[a-zA-Z0-9-]+$/, { message: 'Username can only contain letters (A-Z), numbers (0-9), and hyphens (-)' }),
    email: z.string({ invalid_type_error: 'Email is invalid' }).min(1, { message: 'Email is required' }).email({ message: 'Email is invalid' }),
    password: z
        .string({ invalid_type_error: 'Password is invalid' })
        .min(8, { message: 'Password must be at least 8 characters' })
        .regex(/.*\d.*/, { message: 'Password must contain at least one number' })
        .regex(/.*[A-Za-z].*/, { message: 'Password must contain at least one letter' })
})

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const { body, errors } = await validateAction<z.infer<typeof registerSchema>>({ request, schema: registerSchema })
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
            secure: env.NODE_ENV === 'production'
        })

        throw redirect(302, '/dashboard')
    }
}
