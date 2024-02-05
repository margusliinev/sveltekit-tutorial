import { pgTableCreator, serial, bigint, index, timestamp, varchar } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

// PREFIX

export const pgTable = pgTableCreator((name) => `sprintpilot_${name}`)

// TABLES

export const usersTable = pgTable('users', {
    id: serial('id').primaryKey().notNull(),
    username: varchar('username', { length: 255 }).unique().notNull(),
    email: varchar('email', { length: 255 }).unique().notNull(),
    password: varchar('password', { length: 255 }).notNull(),
    created_at: timestamp('created_at', { mode: 'date', withTimezone: true, precision: 0 }).defaultNow().notNull(),
    updated_at: timestamp('updated_at', { mode: 'date', withTimezone: true, precision: 0 }).defaultNow().notNull()
})

export const sessionsTable = pgTable(
    'sessions',
    {
        id: serial('id').primaryKey().notNull(),
        expires_at: timestamp('expires_at', { mode: 'date' }).notNull(),
        created_at: timestamp('created_at', { mode: 'date', withTimezone: true, precision: 0 }).defaultNow().notNull(),
        updated_at: timestamp('updated_at', { mode: 'date', withTimezone: true, precision: 0 }).defaultNow().notNull(),
        user_id: bigint('user_id', { mode: 'number' })
            .references(() => usersTable.id, { onDelete: 'cascade', onUpdate: 'cascade' })
            .notNull()
    },
    (table) => {
        return { user_id_idx: index('user_id_idx').on(table.user_id) }
    }
)

// RELATIONS

export const usersRelations = relations(usersTable, ({ many }) => ({
    sessions: many(sessionsTable)
}))

export const sessionsRelations = relations(sessionsTable, ({ one }) => ({
    user: one(usersTable, {
        fields: [sessionsTable.user_id],
        references: [usersTable.id]
    })
}))

// INFERRED TYPES

export type User = typeof usersTable.$inferSelect
export type NewUser = typeof usersTable.$inferInsert
export type Session = typeof sessionsTable.$inferSelect
export type NewSession = typeof sessionsTable.$inferInsert
