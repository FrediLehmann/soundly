<script type="ts" context="module">
  import '../../app.css';
  import { PageFrame, PageFrameStyles } from '$lib/components/atoms';

  export const prerender = true;
</script>

<PageFrame style={PageFrameStyles.small} class="pt-32">
  <slot />
</PageFrame>
