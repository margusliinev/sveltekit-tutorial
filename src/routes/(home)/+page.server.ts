import type { Actions } from '@sveltejs/kit'
import { DOMAIN } from '$env/static/private'
import { redirect } from '@sveltejs/kit'

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
            maxAge: 60 * 60 * 24 * 365,
            sameSite: 'lax',
            httpOnly: true,
            secure: true
        })

        const redirectToURL = new URL(redirectTo)
        if (redirectToURL.hostname === DOMAIN) {
            throw redirect(303, redirectToURL.pathname)
        } else {
            console.error('Invalid redirect URL:', redirectTo)
            throw redirect(303, '/')
        }
    }
}
