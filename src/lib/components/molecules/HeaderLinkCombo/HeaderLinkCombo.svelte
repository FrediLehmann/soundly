<script lang="ts" context="module">
  import { Link } from '$lib/components/atoms';
</script>

<script lang="ts">
  export let href: string;
</script>

<section>
  <h1><slot name="headingText" /></h1>
  <span>/</span>
  <Link {href}><slot name="linkText" /></Link>
</section>

<style>
  section {
    display: flex;
    margin-block-end: 1.5rem;
    align-items: baseline;
  }

  h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;

    margin-inline-end: 0.5rem;
  }

  span {
    margin-inline-end: 0.25rem;
  }
</style>
