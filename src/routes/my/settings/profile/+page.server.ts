import { error, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  updateProfile: async ({ request, locals }) => {
    let data = await request.formData();

    // for (var pair of data.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    const userAvatar = data.get("avatar") as File;
    if (userAvatar.size === 0) {
      data.delete("avatar");
    }

    try {
      if (locals.user != undefined) {
        if (locals.user.id != undefined) {
          const { name, avatar } = await locals.pb
            .collection("users")
            .update(locals?.user?.id, data);
          locals.user.name = name;
          locals.user.avatar = avatar;
        }
      }
    } catch (err) {
      console.log("Error:", err);
      throw error(400, "Something went wrong when updating your profile");
    }

    return {
      success: true,
    };
  },
};
