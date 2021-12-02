<script lang="ts">
  import { Link } from '$lib/components/atoms';
  import { ArrowLeft } from '$lib/components/Icons';

  export let href: string;
</script>

<Link
  {href}
  sveltekit:prefetch
  class={`${
    $$props.class ? `${$$props.class} ` : ''
  }flex items-center font-semibold`}>
  <ArrowLeft class="w-5 h-5 mr-2" />
  <span>
    <slot />
  </span>
</Link>
