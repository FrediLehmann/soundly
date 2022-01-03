<script lang="ts" context="module">
  import { PageFrame } from '$lib/components/atoms';
  import { userStore } from '$lib/store';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
</script>

<script lang="ts">
  onMount(() => {
    if ($userStore.isSignedIn) goto('/profile');
  });
</script>

<PageFrame style="small" marginTop="8rem">
  <slot />
</PageFrame>
