// //@ts-nocheck
// export const load = ({ locals }) => {
//     if (locals.user) {
//         return {
//             user: locals.user
//         };
//     }

//     return {
//         user: undefined
//     };
// };

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (({ locals }) => {
    if (locals.user) {
        return {
            user: locals.user
        };
    }

    return {
        user: undefined
    };
}) satisfies LayoutServerLoad;