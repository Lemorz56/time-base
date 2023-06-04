<script lang="ts">
  export let label: any;
  export let checked: any;
</script>

<label for={label}>
  <slot name="trigger" />
</label>

<input type="checkbox" id={label} class="modal-toggle" {checked}>
<label for={label}>
  <label for="" class="modal-box">
    <div class="font-bold text-xl text-center">
      <slot name="heading" />
    </div>
    <div class="my-2">
      <slot />
    </div>
    <div class="modal-action justify-center">
      <slot name="actions" />
    </div>
  </label>
</label>