import type { ClassValue } from 'clsx'
import type { ZodError } from 'zod'
import { ZodSchema } from 'zod'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import bcrypt from 'bcryptjs'

export async function validateAction<ActionInput>({ request, schema }: { request: Request; schema: ZodSchema }) {
    const fromData = Object.fromEntries(await request.formData())

    try {
        const body = schema.parse(fromData) as ActionInput
        return { body }
    } catch (error) {
        const { fieldErrors } = (error as ZodError).flatten()
        const errors = Object.fromEntries(
            Object.entries(fieldErrors).map(([key, value]) => {
                if (value && value[0]) {
                    return [key, value[0]]
                }
                return [key, `${key[0]?.toUpperCase() + key.slice(1)} is invalid`]
            })
        )
        return { errors }
    }
}

export function hashPassword(password: string) {
    try {
        const hash = bcrypt.hash(password, 10)
        return hash
    } catch (error) {
        console.error(error)
        return null
    }
}

export function verifyPassword(password: string, hashedPassword: string) {
    try {
        const isMatch = bcrypt.compare(password, hashedPassword)
        return isMatch
    } catch (error) {
        console.error(error)
        return false
    }
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
