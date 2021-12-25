<script lang="ts" context="module">
  import { Cross } from '$lib/Icons';
</script>

<script lang="ts">
  export let onClose: (
    //<reference types="svelte" />
    e: MouseEvent
  ) => unknown;
</script>

<button on:click={onClose}>
  Close
  <Cross width="1.25rem" height="1.25rem" />
</button>

<style>
  button {
    display: flex;
    gap: 0.25rem;

    margin-inline-start: auto;
    align-items: center;

    background-color: transparent;
    border: none;

    color: inherit;
    font-weight: 500;
  }

  button:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
