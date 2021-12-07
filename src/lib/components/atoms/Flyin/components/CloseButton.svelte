<script lang="ts" context="module">
  import { Button, ButtonStyles } from '$lib/components/atoms';
  import { Cross } from '$lib/components/Icons';
</script>

<script lang="ts">
  export let onClose: (
    //<reference types="svelte" />
    e: MouseEvent
  ) => unknown;
</script>

<Button
  on:click={onClose}
  class="flex items-center ml-auto font-bold"
  btnType={ButtonStyles.link}>
  Close
  <Cross class="w-5 h-5" stroke-width="3" />
</Button>
