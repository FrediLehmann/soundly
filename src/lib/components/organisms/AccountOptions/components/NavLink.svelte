<script lang="ts" context="module">
  import { Link, LinkStyles } from '$lib/components/atoms';
</script>

<script lang="ts">
  export let href: string;
</script>

<Link
  {href}
  class="px-12 py-3 flex gap-5 items-center hover:bg-gray-200"
  sveltekit:prefetch
  style={LinkStyles.none}>
  <slot />
</Link>
