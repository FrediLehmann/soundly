<script lang="ts" context="module">
  import { Link } from '$lib/components/atoms';
  import { ArrowLeft } from '$lib/components/Icons';
</script>

<script lang="ts">
  export let href: string;
</script>

<Link
  {href}
  sveltekit:prefetch
  class={`${
    $$props.class ? `${$$props.class} ` : ''
  }flex items-center font-semibold text-blue-700 hover:underline`}
  style="none">
  <ArrowLeft class="w-5 h-5 mr-2" />
  <span>
    <slot />
  </span>
</Link>
