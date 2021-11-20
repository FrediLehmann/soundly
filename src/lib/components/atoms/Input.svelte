<script lang="ts">
  export let name: string;
  export let label: string;

  // Show label only to screen-readers
  // https://tailwindcss.com/docs/screen-readers
  export let labelSrOnly: boolean = false;
</script>

<div class="flex flex-row w-full">
  <label for={name} class:sr-only={labelSrOnly}>{label}</label>
  <input
    id={name}
    {...$$restProps}
    class={`${$$props.class || ''} bg-gray-100 px-3 py-1 outline-none ml-auto`}
  />
</div>
