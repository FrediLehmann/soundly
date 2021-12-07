<script lang="ts" context="module">
  import { FlyinStyles } from '../FlyinStyles.enum';
  import { CircleCheck, AlertTriangle, XCircle } from '$lib/components/Icons';
</script>

<script lang="ts">
  export let flyinStyle: FlyinStyles;
</script>

{#if flyinStyle === FlyinStyles.info}
  <AlertTriangle class="w-6 h-6 mr-4" stroke-width="3" />
{:else if flyinStyle === FlyinStyles.error}
  <XCircle class="w-6 h-6 mr-4" stroke-width="3" />
{:else if flyinStyle === FlyinStyles.success}
  <CircleCheck class="w-6 h-6 mr-4" stroke-width="3" />
{/if}
