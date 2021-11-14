<script type="ts">
  import { ButtonTypes } from './ButtonTypes.enum';

  export let btnType: ButtonTypes = ButtonTypes.Secondary;
</script>

<button
  type="button"
  {...$$restProps}
  class={`my-auto px-4 h-full ${$$props.class}`}
  class:bg-gray-300={btnType === ButtonTypes.Secondary}
  class:bg-blue-500={btnType === ButtonTypes.Primary}
>
  <slot />
</button>
