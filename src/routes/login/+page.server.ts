import { error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    login: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData())
        try {
            await locals.pb.collection('users').authWithPassword(body.email.toString(), body.password.toString());
            if (!locals.pb.authStore.model?.verified) {
                locals.pb.authStore.clear();
                return {
                    notVerified: true
                }
            }
        } catch (err) {
            console.error('Error:', err)
            throw error(500, 'Something went wrong when trying to log you in')
        }

        throw redirect(303, '/')
    }
} satisfies Actions;