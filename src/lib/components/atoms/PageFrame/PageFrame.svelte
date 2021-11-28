<script lang="ts">
  import { PageFrameStyles } from './PageFrameStyles.enum';

  export let style: PageFrameStyles = PageFrameStyles.default;
</script>

<main class={`${$$props.class ? `${$$props.class} ` : ''}${style}`}>
  <slot />
</main>
