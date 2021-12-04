<script type="ts">
  import type { ButtonStyles } from '$lib/components/atoms';

  import { LinkStyles } from './LinkStyles.enum';

  export let href: string;
  export let style: LinkStyles | ButtonStyles = LinkStyles.default;
</script>

<a {href} data-type={style} {...$$restProps}>
  <slot />
</a>

<style>
  a[data-type='default'] {
    @apply block text-blue-700 hover:underline;
  }

  a[data-type='primary'] {
    @apply my-auto px-5 py-2 h-full bg-blue-600 text-white hover:bg-blue-800 disabled:bg-blue-800 disabled:cursor-default;
  }

  a[data-type='secondary'] {
    @apply my-auto px-5 py-2 h-full bg-gray-300 hover:bg-gray-400 disabled:bg-gray-400 disabled:cursor-default;
  }

  a[data-type='ghost'] {
    @apply py-1 px-2 rounded-sm border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white disabled:text-blue-500 disabled:bg-transparent disabled:cursor-default;
  }

  a[data-type='link'] {
    @apply hover:underline;
  }
</style>
