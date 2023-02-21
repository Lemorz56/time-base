<script>
  import { Icon, Pencil } from 'svelte-hero-icons'
</script>

<div class="flex h-full w-full flex-col">
  <form
    action="?/updateProfile"
    method="post"
    class="flex w-full flex-col space-y-2"
  >
    <h3 class="text-2xl font-medium">Update Profile</h3>
    <div class="form-control w-full max-w-lg">
      <label for="avatar" class="label font-medium pb-1">
        <span class="label-text">Profile Picture</span>
      </label>
      <label for="avatar" class="avatar w-32 rounded-full hover:cursor-pointer">
        <label for="avatar" class="absolute -bottom-0.5 -right-0.5 hover:cursor-pointer">
          <span class="btn btn-circle btn-sm btn-secondary">
            <Icon src={Pencil} class="w-4 h-4"/>
          </span>
        </label>
        <div class="w-32 rounded-full">
          <img src="https://plchldr.co/i/500x250?text=CHANGE-ME" alt="user avatar" /> <!-- https://loremflickr.com/80/80/human -->
        </div>
      </label>
      <input type="file" name="avatar" id="avatar" value="" accept="image/*" hidden />
    </div>
  </form>
</div>
