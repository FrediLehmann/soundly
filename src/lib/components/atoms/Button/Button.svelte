<script type="ts">
  import { ButtonTypes } from './ButtonTypes.enum';

  export let btnType: ButtonTypes = ButtonTypes.Secondary;
</script>

<button
  type="button"
  {...$$restProps}
  on:click
  class={`${$$props.class || ''} my-auto px-5 py-2 h-full`}
  class:bg-gray-300={btnType === ButtonTypes.Secondary}
  class:bg-blue-600={btnType === ButtonTypes.Primary}
  class:text-white={btnType === ButtonTypes.Primary}
>
  <slot />
</button>
