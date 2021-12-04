<script type="ts">
  import { ButtonStyles } from './ButtonStyles.enum';

  export let btnType: ButtonStyles = ButtonStyles.secondary;
</script>

<button type="button" on:click data-type={btnType} {...$$restProps}>
  <slot />
</button>

<style>
  button[data-type='primary'] {
    @apply my-auto px-5 py-2 h-full bg-blue-600 text-white hover:bg-blue-800 disabled:bg-blue-800 disabled:cursor-default;
  }

  button[data-type='secondary'] {
    @apply my-auto px-5 py-2 h-full bg-gray-300 hover:bg-gray-400 disabled:bg-gray-400 disabled:cursor-default;
  }

  button[data-type='ghost'] {
    @apply py-1 px-2 rounded-sm border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white disabled:text-blue-500 disabled:bg-transparent disabled:cursor-default;
  }

  button[data-type='link'] {
    @apply hover:underline;
  }
</style>
