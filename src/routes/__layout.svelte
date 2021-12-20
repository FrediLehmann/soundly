<script type="ts" context="module">
  import { PageFrame } from '$lib/components/atoms';
  import { Header } from '$lib/components/organisms';
</script>

<Header />

<PageFrame>
  <slot />
</PageFrame>
