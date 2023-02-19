<script>
  // @ts-nocheck
  import "../app.css";
  export let data;
</script>

<div class="min-h-full">
  <nav class="navbar border-b bg-base-100">
    <div class="flex-1">
      <a href="/" class="btn-ghost btn text-xl normal-case">Time-Base</a>
    </div>
    <div class="flex-none">
      {#if !data.user}
        <div class="dropdown-end dropdown">
          <a href="/login" class="btn-primary btn">Login</a>
          <a href="/register" class="btn-secondary btn">Register</a>
        </div>
      {:else}
        <div class="dropdown-end dropdown mr-4">
          <a href="/projects/new" class="btn-outline btn-primary btn"
            >Add Project</a
          >
        </div>
        <div class="dropdown-end dropdown">
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label tabindex="0" class="btn-ghost btn-circle avatar btn">
            <div class="w-10 rounded-full">
              <img
                src="https://loremflickr.com/80/80/human"
                alt="User avatar"
              />
              <!--  https://placeimg.com/80/80/people-->
            </div>
          </label>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <ul
            tabindex="0"
            class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a href="/my/projects" class="justify-between">My Projects</a>
            </li>
            <li><a href="/my/settings">Settings</a></li>
            <li>
              <form action="/logout" method="POST">
                <button type="submit" class="w-full text-start">Logout</button>
              </form>
            </li>
          </ul>
        </div>
      {/if}
    </div>
  </nav>
  <div class="py-10">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <slot />
    </div>
  </div>
</div>
