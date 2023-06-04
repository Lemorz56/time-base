<script lang="ts">
  import { enhance, applyAction } from "$app/forms";
  import { invalidateAll } from "$app/navigation";
  import { Icon, Pencil } from "svelte-hero-icons";
  import { Input } from "$lib/components";
  import { getImageUrl } from "$lib/utils";
  import type { ActionResult } from "@sveltejs/kit";

  export let data: any; //todo: change type
  let loading: boolean;

  $: loading = false;
  const showPreview = (event: Event) => {
    const target = event.target as any; //todo: change type
    const files = target.files;

    if (files.length > 0) {
      const src = URL.createObjectURL(files[0]);
      const preview = document.getElementById("avatar-preview");
      preview?.setAttribute("src", src);
    }
  };

  const submitUpdateProfile = () => {
    loading = true;
    return async ({
      result,
    }: {
      result: ActionResult<Record<string, any>, Record<string, any>>;
    }) => {
      switch (result.type) {
        case "success":
          await invalidateAll();
          break;
        case "error":
          break;
        default:
          await applyAction(result);
      }
      loading = false;
    };
  };
</script>

<div class="flex h-full w-full flex-col">
  <form
    action="?/updateProfile"
    method="post"
    class="flex w-full flex-col space-y-2"
    enctype="multipart/form-data"
    use:enhance={submitUpdateProfile}
  >
    <h3 class="text-2xl font-medium">Update Profile</h3>
    <div class="form-control w-full max-w-lg">
      <label for="avatar" class="label pb-1 font-medium">
        <span class="label-text">Profile Picture</span>
      </label>
      <label for="avatar" class="avatar w-32 rounded-full hover:cursor-pointer">
        <label
          for="avatar"
          class="absolute -bottom-0.5 -right-0.5 hover:cursor-pointer"
        >
          <span class="btn-secondary btn-sm btn-circle btn">
            <Icon src={Pencil} class="h-4 w-4" />
          </span>
        </label>
        <div class="w-32 rounded-full">
          <img
            src={data.user?.avatar
              ? getImageUrl(
                  data.user?.collectionId,
                  data.user?.id,
                  data.user?.avatar
                )
              : `https://ui-avatars.com/api/?name=${data.user?.name}`}
            alt="user avatar"
            id="avatar-preview"
          />
          <!-- https://plchldr.co/i/500x250?text=CHANGE-ME -->
        </div>
      </label>
      <input
        type="file"
        name="avatar"
        id="avatar"
        value=""
        accept="image/*"
        hidden
        on:change={showPreview}
        disabled={loading}
      />
    </div>
    <Input id="name" label="Name" value={data?.user?.name} disabled={loading}/>
    <button class="btn-primary btn w-full max-w-lg" type="submit" disabled={loading}>
      Update Profile
    </button>
  </form>
</div>
