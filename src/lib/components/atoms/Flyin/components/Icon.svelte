<script lang="ts" context="module">
  import { CircleCheck, AlertTriangle, XCircle } from '$lib/components/Icons';
</script>

<script lang="ts">
  export let style: string;
</script>

{#if style === 'info'}
  <AlertTriangle class="w-6 h-6 mr-4" stroke-width="3" />
{:else if style === 'error'}
  <XCircle class="w-6 h-6 mr-4" stroke-width="3" />
{:else if style === 'success'}
  <CircleCheck class="w-6 h-6 mr-4" stroke-width="3" />
{/if}
