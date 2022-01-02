<script lang="ts" context="module">
  import { Link } from '$lib/components/atoms';
  import { ArrowLeft } from '$lib/Icons';
</script>

<Link href="/signin" class="mbe-4">
  <ArrowLeft width="1.25rem" height="1.25rem" />
  Back
</Link>

<style>
  :global(.mbe-4) {
    margin-block-end: 1rem;
  }
</style>
