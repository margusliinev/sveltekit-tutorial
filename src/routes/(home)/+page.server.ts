import type { ServerLoad, Actions } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'

export const load: ServerLoad = async ({ cookies }) => {
    const session = cookies.get('__session')
    if (session) throw redirect(303, '/dashboard')
}

export const actions: Actions = {
    setTheme: async ({ cookies, url }) => {
        const theme = url.searchParams.get('theme')
        const redirectTo = url.searchParams.get('redirectTo')

        if (!theme || !redirectTo) {
            console.error('Missing theme or redirectTo parameter')
            throw redirect(303, '/')
        }

        if (theme !== 'dark' && theme !== 'light') {
            console.error('Invalid theme parameter:', theme)
            throw redirect(303, '/')
        }

        cookies.set('theme', theme, {
            path: '/',
            sameSite: 'lax',
            httpOnly: true,
            maxAge: 365 * 24 * 60 * 60,
            secure: env.NODE_ENV === 'production'
        })

        const redirectToURL = new URL(redirectTo)
        if (redirectToURL.hostname === env.DOMAIN) {
            throw redirect(303, redirectToURL.pathname)
        } else {
            console.error('Invalid redirect URL:', redirectTo)
            throw redirect(303, '/')
        }
    }
}
