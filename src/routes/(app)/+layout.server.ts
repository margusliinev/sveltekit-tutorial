import type { ServerLoad } from '@sveltejs/kit'

export const load: ServerLoad = async ({ locals, url }) => {
    return {
        user: locals.user,
        route: url.pathname
    }
}
