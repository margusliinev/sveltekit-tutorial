import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
    let theme: string | null = null;

    const cookieTheme = event.cookies.get('theme');

    if (cookieTheme) {
        theme = cookieTheme;
    }

    if (theme) {
        return await resolve(event, {
            transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
        });
    }

    return await resolve(event);
}) satisfies Handle;
