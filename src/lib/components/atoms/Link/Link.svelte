<script type="ts">
  import type { ButtonStyles } from '$lib/components/atoms';

  import { LinkStyles } from './LinkStyles.enum';

  export let href: string;
  export let style: LinkStyles | ButtonStyles = LinkStyles.default;
</script>

<a {href} data-type={style} class="link" {...$$restProps}>
  <slot />
</a>
