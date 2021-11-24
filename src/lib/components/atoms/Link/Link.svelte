<script type="ts">
  import { LinkStyles } from './LinkStyles.enum';

  export let href: string;
  export let prefetch: boolean = false;
  export let external: boolean = false;
  export let style: LinkStyles = LinkStyles.default;
</script>

{#if prefetch}
  <a
    {href}
    class={`${$$props.class ? `${$$props.class} ` : ''}${style}`}
    rel={external && 'external'}
    sveltekit:prefetch
  >
    <slot />
  </a>
{:else}
  <a
    {href}
    class={`${$$props.class ? `${$$props.class} ` : ''}${style}`}
    rel={external && 'external'}
  >
    <slot />
  </a>
{/if}
