<script type="ts">
  import { ButtonStyles } from './ButtonStyles.enum';

  export let btnType: ButtonStyles = ButtonStyles.secondary;
</script>

<button
  type="button"
  on:click
  data-type={btnType}
  {...$$restProps}
  class={`${$$props.class ? `${$$props.class} ` : ''}button`}>
  <slot />
</button>
