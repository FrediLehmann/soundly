<script>
  import Flyin from '../Flyin.svelte';

  let flyin;
</script>

<Flyin bind:this={flyin} />
<button on:click={() => flyin.show('Test', 'info')}>Open</button>
