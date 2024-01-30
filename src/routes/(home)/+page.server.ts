import { redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
    setTheme: async ({ cookies, request }) => {
        const formData = await request.formData();
        const theme = String(formData.get('theme'));

        if (theme) {
            cookies.set('theme', theme, {
                path: '/',
                maxAge: 60 * 60 * 24 * 365
            });
        }

        throw redirect(303, '/');
    }
};
