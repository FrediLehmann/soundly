<script type="ts">
  import { ButtonTypes } from './ButtonTypes.enum';

  export let btnType: ButtonTypes = ButtonTypes.Secondary;
  export let href: string;
</script>

{#if href}
  <a
    {href}
    {...$$restProps}
    class={`flex items-center px-4 h-full ${$$props.class}`}
    class:bg-gray-300={btnType === ButtonTypes.Secondary}
    class:bg-blue-500={btnType === ButtonTypes.Primary}
  >
    <slot />
  </a>
{:else}
  <button
    type="button"
    {...$$restProps}
    class={`my-auto px-4 h-full ${$$props.class}`}
    class:bg-gray-300={btnType === ButtonTypes.Secondary}
    class:bg-blue-500={btnType === ButtonTypes.Primary}
  >
    <slot />
  </button>
{/if}
