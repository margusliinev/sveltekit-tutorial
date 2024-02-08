import type { Handle } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'
import { getUserBySessionId } from '$lib/server/models/session'
import { sequence } from '@sveltejs/kit/hooks'

export const themeHook = (async ({ event, resolve }) => {
    let theme: string | null = null

    const newTheme = event.url.searchParams.get('theme')
    const cookieTheme = event.cookies.get('theme')

    if (newTheme) {
        theme = newTheme
    } else if (cookieTheme) {
        theme = cookieTheme
    }

    if (theme === 'dark' || theme === 'light') {
        return await resolve(event, {
            transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
        })
    }

    return await resolve(event)
}) satisfies Handle

export const authHook = (async ({ event, resolve }) => {
    const publicPages = ['/', '/login', '/register', '/pricing']
    const session = event.cookies.get('__session')
    const path = event.url.pathname

    if (publicPages.includes(path)) return await resolve(event)

    if (!session) return redirect(303, '/login')

    const user = await getUserBySessionId(session)
    if (!user) {
        event.cookies.delete('__session', { path: '/' })
        return redirect(303, '/login')
    }

    event.locals.user = { id: user.id, username: user.username, email: user.email, created_at: user.created_at, updated_at: user.updated_at }

    return await resolve(event)
}) satisfies Handle

export const handle = sequence(themeHook, authHook)
