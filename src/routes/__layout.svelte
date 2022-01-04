<script lang="ts" context="module">
  import { PageFrame } from '$lib/components/atoms';
  import { Header, Footer } from '$lib/components/organisms';
</script>

<Header />

<PageFrame>
  <slot />
</PageFrame>

<Footer />
