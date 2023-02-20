<script lang="ts">
  export let form: any;
</script>

<div class="flex h-full w-full flex-col items-center">
  <h2
    class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content"
  >
    Reset Your Password
  </h2>
  <p class="mt-1 text-center">
    We'll send you an email with a link to reset your password.
  </p>
  <form
    action="?/resetPassword"
    method="POST"
    class="flex w-full flex-col items-center space-y-2 pt-4"
  >
    <!-- EMAIL -->
    <div class="form-control w-full max-w-md">
      <label for="email" class="label pb-1 font-medium">
        <span class="label-text">Email</span>
      </label>
      <input
        type="email"
        name="email"
        class="input-bordered input w-full max-w-md"
      />
    </div>
    <div class="w-full max-w-md pt-2">
      <button type="submit" class="btn-primary btn w-full"
        >Request Password Reset</button
      >
    </div>
    {#if form?.success}
      <div class="alert alert-success w-full max-w-md shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 flex-shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >
          <span>An email has been sent to reset your password!</span>
        </div>
      </div>
    {/if}
  </form>
</div>
