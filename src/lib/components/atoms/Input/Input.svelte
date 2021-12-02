<script lang="ts">
  export let name: string;
  export let label: string;
  export let value: string | number | string[];
  export let error = '';
  export let required = false;

  // Show label only to screen-readers
  // https://tailwindcss.com/docs/screen-readers
  export let labelSrOnly = false;
</script>

<div class="grid grid-cols-3 w-full">
  <label for={name} class="self-center" class:sr-only={labelSrOnly}>
    {label}
    {#if required}
      <span class="ordinal">*</span>
    {/if}
  </label>
  <input
    id={name}
    {...$$restProps}
    bind:value
    class={`${
      $$props.class ? `${$$props.class} ` : ''
    }bg-gray-100 px-3 py-1 focus:outline-none focus:ring focus:border-blue-300 col-span-2`}
    class:col-span-3={labelSrOnly} />
  {#if error}
    <span
      class="text-red-500 mt-1 text-xs font-semibold col-start-2 col-span-2">
      {error}
    </span>
  {/if}
</div>
