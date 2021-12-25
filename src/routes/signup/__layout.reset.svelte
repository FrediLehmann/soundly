<script type="ts" context="module">
  import { PageFrame } from '$lib/components/atoms';

  export const prerender = true;
</script>

<PageFrame style="small" marginTop="8rem">
  <slot />
</PageFrame>
