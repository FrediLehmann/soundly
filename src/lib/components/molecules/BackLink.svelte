<script lang="ts">
  import { Link, LinkStyles } from '$lib/components/atoms';
  import { ArrowLeft } from '$lib/components/Icons';

  export let href: string;
</script>

<Link
  {href}
  sveltekit:prefetch
  class={`${
    $$props.class ? `${$$props.class} ` : ''
  }flex items-center font-semibold text-blue-700 hover:underline`}
  style={LinkStyles.none}>
  <ArrowLeft class="w-5 h-5 mr-2" />
  <span>
    <slot />
  </span>
</Link>
