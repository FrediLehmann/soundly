<script lang="ts">
  import { PageFrameTypes } from './PageFrameTypes.enum';

  export let type: PageFrameTypes = PageFrameTypes.default;
</script>

<main class={`${$$props.class ? `${$$props.class} ` : ''}${type}`}>
  <slot />
</main>
