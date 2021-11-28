<script type="ts">
  import { ButtonStyles } from './ButtonStyles.enum';

  export let btnType: ButtonStyles = ButtonStyles.Secondary;
</script>

<button
  type="button"
  {...$$restProps}
  on:click
  class={`${$$props.class ? `${$$props.class} ` : ''}${btnType}`}
>
  <slot />
</button>
