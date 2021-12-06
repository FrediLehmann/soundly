<script type="ts" context="module">
  import { ButtonStyles } from './ButtonStyles.enum';
</script>

<script type="ts">
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
