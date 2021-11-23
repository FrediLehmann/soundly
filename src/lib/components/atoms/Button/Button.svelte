<script type="ts">
  import { ButtonTypes } from './ButtonTypes.enum';

  export let btnType: ButtonTypes = ButtonTypes.Secondary;
</script>

<button
  type="button"
  {...$$restProps}
  on:click
  class={`${$$props.class || ''} ${btnType}`}
>
  <slot />
</button>
