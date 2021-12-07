<script type="ts" context="module">
  import { LinkStyles } from './LinkStyles.enum';
</script>

<script type="ts">
  export let href: string;
  export let style: LinkStyles = LinkStyles.default;
</script>

<a
  {href}
  data-type={style}
  {...$$restProps}
  class={`${$$props.class ? `${$$props.class} ` : ''}link`}>
  <slot />
</a>
