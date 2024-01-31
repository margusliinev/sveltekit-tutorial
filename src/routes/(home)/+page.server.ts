import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
    setTheme: async ({ cookies, request }) => {
        const formData = await request.formData();
        const theme = formData.get('theme');

        if (typeof theme !== 'string') return;

        if (theme) {
            cookies.set('theme', theme, {
                path: '/',
                maxAge: 60 * 60 * 24 * 365
            });
        }
    }
};
