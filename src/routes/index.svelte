<script lang="ts" context="module">
  import { SearchField } from '$lib/components/molecules';
  import { Flyin } from '$lib/components/atoms';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { supabase } from '$lib/supabase';
  import { goto } from '$app/navigation';
</script>

<script lang="ts">
  let flyin: Flyin;

  onMount(async () => {
    // Email vaildation url contains session info in url
    // In this case we will redirect to the prifle page
    const { error } = await supabase.auth.getSessionFromUrl();
    if (!error) goto('/profile');

    // Check if there is a fly in message to be shown
    // In case there is show the flyin
    const message = $page.url.searchParams.get('message');
    const type = $page.url.searchParams.get('type') as
      | 'success'
      | 'info'
      | 'error';

    if (type && message) {
      flyin.show(message, type);
    }

    // Supabase message
    if (location?.hash.includes('message')) {
      flyin.show(location.hash.split('=')[1].split('+').join(' '), 'info');
    }
  });
</script>

<svelte:head>
  <title>Noiceless</title>
</svelte:head>

<SearchField />

<h1 class="text-2xl">Welcome to Noiceless</h1>

<Flyin bind:this={flyin} />
