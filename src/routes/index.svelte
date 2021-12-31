<script type="ts" context="module">
  import { SearchField } from '$lib/components/molecules';
  import { Flyin } from '$lib/components/atoms';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
</script>

<script type="ts">
  let flyin: Flyin;

  onMount(() => {
    const message = $page.url.searchParams.get('message');
    const type = $page.url.searchParams.get('type');

    if (type && message) {
      let flyinType;
      switch (type) {
        case 'success':
          flyinType = 'success';
          break;
        case 'info':
          flyinType = 'info';
          break;
        case 'error':
          flyinType = 'error';
          break;
        default:
          flyinType = 'info';
      }

      flyin.show(message, flyinType);
    }
  });
</script>

<svelte:head>
  <title>Noiceless</title>
</svelte:head>

<SearchField />

<h1 class="text-2xl">Welcome to Noiceless</h1>

<Flyin bind:this={flyin} />
