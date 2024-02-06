import type { Session } from '$lib/server/db/schema'
import { usersTable, sessionsTable } from '$lib/server/db/schema'
import { and, eq, gt } from 'drizzle-orm'
import { db } from '$lib/server/db'

const SESSION_EXPIRATION_TIME = 1000 * 60 * 60 * 24 * 7

export async function createSession(userId: Session['user_id']) {
    try {
        const [session] = await db
            .insert(sessionsTable)
            .values({ user_id: userId, expires_at: new Date(Date.now() + SESSION_EXPIRATION_TIME) })
            .returning()
        return session
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function getUserBySessionId(sessionId: Session['id']) {
    try {
        const result = await db.query.sessionsTable.findFirst({
            columns: {},
            with: { user: { columns: { id: true } } },
            where: and(eq(usersTable.id, sessionId), gt(sessionsTable.expires_at, new Date()))
        })
        return result?.user
    } catch (error) {
        console.error(error)
        return null
    }
}
