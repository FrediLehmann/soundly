<script type="ts" context="module">
  import { ButtonStyles } from './ButtonStyles.enum';
</script>

<script type="ts">
  export let btnType: ButtonStyles = ButtonStyles.secondary;
</script>

<button
  on:click
  type="button"
  data-type={btnType}
  class={`${$$props.class ? `${$$props.class} ` : ''}button`}>
  <slot />
</button>
