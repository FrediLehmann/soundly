<script type="ts">
  import '../../../aws';
  import '../../app.css';

  import { PageFrame, PageFrameTypes } from '$lib/components/atoms';
</script>

<PageFrame type={PageFrameTypes.small}>
  <slot />
</PageFrame>
