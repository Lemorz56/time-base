<script lang="ts">
  export let form: any;
</script>

<div class="flex h-full w-full flex-col items-center">
  <h2
    class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content"
  >
    Login
  </h2>
  <p class="mt-1 text-center">
    Or <a
      href="/register"
      class="font-medium text-primary hover:cursor-pointer hover:underline"
      >register</a
    > if you don't have an account
  </p>
  <form
    action="?/login"
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
    <!-- PASSWORD -->
    <div class="form-control w-full max-w-md">
      <label for="password" class="label pb-1 font-medium">
        <span class="label-text">Password</span>
      </label>
      <input
        type="password"
        name="password"
        class="input-bordered input w-full max-w-md"
      />
    </div>

    <div class="w-full max-w-md">
      <a
        href="/reset-password"
        class="font-medium text-primary hover:cursor-pointer hover:underline"
      >
        Forgot Password?
      </a>
    </div>

    <div class="w-full max-w-md pt-2">
      <button type="submit" class="btn-primary btn w-full">Login</button>
    </div>

    {#if form?.notVerified}
      <div class="alert alert-error w-full max-w-md shadow-lg">
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
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >
          <span>You must verify your email before logging in!</span>
        </div>
      </div>
    {/if}
  </form>
</div>
