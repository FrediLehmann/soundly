<script type="ts">
  //   import '$lib/api/auth/aws';
  import '../../app.css';

  import { PageFrame, PageFrameTypes } from '$lib/components/atoms';
</script>

<PageFrame type={PageFrameTypes.small}>
  <slot />
</PageFrame>
