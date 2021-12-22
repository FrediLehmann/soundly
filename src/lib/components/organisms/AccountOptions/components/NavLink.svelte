<script lang="ts" context="module">
  import { Link } from '$lib/components/atoms';
</script>

<script lang="ts">
  export let href: string;
</script>

<Link
  {href}
  class="px-12 py-3 flex gap-5 items-center hover:bg-gray-200"
  style="none">
  <slot />
</Link>
