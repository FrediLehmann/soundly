<script lang="ts" context="module">
  import { Cross } from '$lib/components/Icons';
</script>

<script lang="ts">
  export let onClose: (
    //<reference types="svelte" />
    e: MouseEvent
  ) => unknown;
</script>

<button on:click={onClose}>
  Close
  <Cross width="1.25rem" height="1.25rem" stroke-width="3" />
</button>

<style>
  button {
    display: flex;
    gap: 0.25rem;

    margin-inline-start: auto;
    align-items: center;

    background-color: transparent;
    border: none;

    color: hsla(var(--white));
    font-weight: 600;
  }

  button:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
