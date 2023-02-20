<script lang="ts">
  import { page } from "$app/stores";
  export let data: any;

  const navigation: any[] = [
    {
      title: "Profile",
      href: "/my/settings/profile",
    },
    {
      title: "Account",
      href: "/my/settings/account",
    },
    {
      title: "Security",
      href: "/my/settings/security",
    },
  ];
</script>

<div class="h-full w-full px-2">
  <h3 class="text-2xl font-medium">Settings</h3>
  <div class="divider" />
</div>
<div class="flex h-full w-full space-x-4">
  <ul class="menu rounded-box w-56 bg-base-100 p-2">
    {#each navigation as navItem}
      <li>
        <a
          href={navItem.href}
          class="font-medium {$page.url.pathname === navItem.href
            ? 'active'
            : ''}">{navItem.title}</a
        >
      </li>
    {/each}
  </ul>
  <div class="w-full">
    <slot />
  </div>
</div>
