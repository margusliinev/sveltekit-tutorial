import type { Handle } from '@sveltejs/kit'

export const handle = (async ({ event, resolve }) => {
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
