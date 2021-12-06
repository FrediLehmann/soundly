<script type="ts">
  import '../../app.css';

  import { PageFrame, PageFrameStyles } from '$lib/components/atoms';
</script>

<PageFrame style={PageFrameStyles.small} class="pt-32">
  <slot />
</PageFrame>
