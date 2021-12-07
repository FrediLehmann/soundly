<script lang="ts" context="module">
  import { PageFrameStyles } from './PageFrameStyles.enum';
</script>

<script lang="ts">
  export let style: PageFrameStyles = PageFrameStyles.default;
</script>

<main class={`${$$props.class ? `${$$props.class} ` : ''}${style}`}>
  <slot />
</main>
