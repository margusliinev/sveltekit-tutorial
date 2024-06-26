import 'dotenv/config'
import type { Config } from 'drizzle-kit'

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set')
}

export default {
    schema: './src/lib/server/db/schema.ts',
    driver: 'pg',
    out: './src/lib/server/db/migrations',
    dbCredentials: { connectionString: process.env.DATABASE_URL }
} satisfies Config
