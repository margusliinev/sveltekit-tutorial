import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { usersTable } from './schema'
import { hash } from '../models/auth'
import * as schema from './schema'
import mockUsers from './users.json'
import pg from 'pg'

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set')
}

const client = new pg.Client({
    connectionString: process.env.DATABASE_URL
})

const db = drizzle(client, { schema })

async function seed() {
    console.log('🌱 Seeding started')
    console.time(`🌱 Database has been seeded`)
    await client.connect()

    console.time('🧹 Cleaned up the database')
    await db.delete(usersTable)
    console.timeEnd('🧹 Cleaned up the database')

    console.time(`👤 Created ${mockUsers.length} users`)
    for (const user of mockUsers) {
        const hashedPassword = await hash(user.password)
        if (!hashedPassword) throw new Error('Error during hashing password')

        await db.insert(usersTable).values({ username: user.username, email: user.email, password: hashedPassword })
    }
    console.timeEnd(`👤 Created ${mockUsers.length} users`)

    await client.end()
    console.timeEnd(`🌱 Database has been seeded`)
}

seed().catch((error) => {
    console.error('Error during seeding:', error)
    process.exit(1)
})
