<script lang="ts" context="module">
  import { CircleCheck, AlertTriangle, XCircle } from '$lib/Icons';
</script>

<script lang="ts">
  export let style: string;
</script>

{#if style === 'info'}
  <AlertTriangle width="1.5rem" height="1.5rem" />
{:else if style === 'error'}
  <XCircle width="1.5rem" height="1.5rem" />
{:else if style === 'success'}
  <CircleCheck width="1.5rem" height="1.5rem" />
{/if}
