import type { User, NewUser } from '$lib/server/db/schema'
import { usersTable } from '$lib/server/db/schema'
import { eq } from 'drizzle-orm'
import { db } from '$lib/server/db'

export async function getUserById(id: User['id']) {
    try {
        return await db.query.usersTable.findFirst({ where: eq(usersTable.id, id), columns: { password: false } })
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function getUserByUsername(username: User['username']) {
    try {
        return await db.query.usersTable.findFirst({ where: eq(usersTable.username, username.toLowerCase()), columns: { password: false } })
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function getUserByEmail(email: User['email']) {
    try {
        return await db.query.usersTable.findFirst({ where: eq(usersTable.email, email.toLowerCase()), columns: { password: false } })
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function getUserByEmailWithPassword(email: User['email']) {
    try {
        return await db.query.usersTable.findFirst({ where: eq(usersTable.email, email.toLowerCase()) })
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function createUser(user: NewUser) {
    try {
        const [newUser] = await db.insert(usersTable).values(user).returning()
        return newUser
    } catch (error) {
        console.error(error)
        return null
    }
}
