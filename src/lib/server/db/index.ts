import { drizzle } from 'drizzle-orm/node-postgres'
import { env } from '$env/dynamic/private'
import pg from 'pg'
import * as schema from './schema'

export const pool = new pg.Pool({
    connectionString: env.DATABASE_URL
})

export const db = drizzle(pool, { schema })
