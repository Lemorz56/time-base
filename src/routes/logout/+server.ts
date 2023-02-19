// import { redirect } from '@sveltejs/kit';
// import type { } from './$types';

// export const POST = ({ locals }) => {
//     locals.pb.authStore.clear();
//     locals.user = undefined;

//     throw redirect(303, '/login');
// }

import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals }) => {
    locals.pb.authStore.clear();
    locals.user = undefined;

    throw redirect(303, '/login')
}