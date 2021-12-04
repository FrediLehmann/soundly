<script type="ts">
  import { ButtonStyles } from './ButtonStyles.enum';

  export let btnType: ButtonStyles = ButtonStyles.secondary;
</script>

<button
  type="button"
  on:click
  data-type={btnType}
  class="button"
  {...$$restProps}>
  <slot />
</button>
