<script type="ts">
  //   import '$lib/api/auth/aws';
  import '../../app.css';

  import { PageFrame, PageFrameStyles } from '$lib/components/atoms';
</script>

<PageFrame style={PageFrameStyles.small}>
  <slot />
</PageFrame>
