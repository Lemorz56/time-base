import { error, redirect } from "@sveltejs/kit";
import { generateUsername } from "../../lib/utils";
import type { Actions } from "./$types";

export const actions: Actions = {
  register: async ({ locals, request }) => {
    const body = Object.fromEntries(await request.formData());

    let name = body.name.toString().split(" ").join("");
    let username = generateUsername(name).toLowerCase();

    try {
      await locals.pb.collection("users").create({ username, ...body });
      await locals.pb
        .collection("users")
        .requestVerification(body.email.toString());
    } catch (err) {
      console.error("Error: ", err);
      throw error(500, "Something went wrong"); //todo: handle better
    }

    throw redirect(303, "/login");
  },
} satisfies Actions;
