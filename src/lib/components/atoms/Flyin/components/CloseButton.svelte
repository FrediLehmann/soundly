<script lang="ts" context="module">
  import { Cross } from '$lib/components/Icons';
</script>

<script lang="ts">
  export let onClose: (
    //<reference types="svelte" />
    e: MouseEvent
  ) => unknown;
</script>

<button
  on:click={onClose}
  class="flex ml-auto items-center font-semibold text-white hover:underline"
  style="link">
  Close
  <Cross class="w-5 h-5" stroke-width="3" />
</button>
