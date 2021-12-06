<script type="ts" context="module">
  import type { ButtonStyles } from '$lib/components/atoms';

  import { LinkStyles } from './LinkStyles.enum';
</script>

<script type="ts">
  export let href: string;
  export let style: LinkStyles | ButtonStyles = LinkStyles.default;
</script>

<a
  {href}
  data-type={style}
  {...$$restProps}
  class={`${$$props.class ? `${$$props.class} ` : ''}link`}>
  <slot />
</a>
