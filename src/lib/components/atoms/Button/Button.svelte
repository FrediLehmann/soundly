<script type="ts">
  import { ButtonTypes } from './ButtonTypes.enum';

  export let btnType: ButtonTypes = ButtonTypes.Secondary;
  export let href: string = '';
</script>

{#if href}
  <a
    {href}
    {...$$restProps}
    class={` ${$$props.class || ''} flex items-center px-5 py-2 h-full`}
    class:bg-gray-300={btnType === ButtonTypes.Secondary}
    class:bg-blue-600={btnType === ButtonTypes.Primary}
    class:text-white={btnType === ButtonTypes.Primary}
  >
    <slot />
  </a>
{:else}
  <button
    type="button"
    {...$$restProps}
    class={`${$$props.class || ''} my-auto px-5 py-2 h-full`}
    class:bg-gray-300={btnType === ButtonTypes.Secondary}
    class:bg-blue-600={btnType === ButtonTypes.Primary}
    class:text-white={btnType === ButtonTypes.Primary}
  >
    <slot />
  </button>
{/if}
