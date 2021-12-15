<script lang="ts" context="module">
  import { goto } from '$app/navigation';

  import { ArrowLeft } from '$lib/components/Icons';
  import { Link } from '$lib/components/atoms';
  import { userStore } from '$lib/store/user';
  import { onMount } from 'svelte';
</script>

<script lang="ts">
  onMount(() => !$userStore.isSignedIn && goto('/signin'));
</script>

<Link href="/" class="mb-2 pt-4">
  <ArrowLeft width="1.25rem" height="1.25rem" />
  Home
</Link>
<section class="grid-cols-2">
  <label class="col-span-1" for="email">Email</label>
  <input class="col-span-1" id="email" />
</section>
