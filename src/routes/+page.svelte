<script>
  import "../app.css";
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<slot />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
