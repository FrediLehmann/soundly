<script lang="ts">
  import type { FlyinConfig } from './FlyinConfig.interface';
  import { FlyinStyles } from './FlyinStyles.enum';

  import { fly } from 'svelte/transition';
  import {
    CircleCheck,
    Cross,
    AlertTriangle,
    XCircle
  } from '$lib/components/Icons';
  import { Button, ButtonStyles } from '$lib/components/atoms';

  let isVisible = false;
  let flyinMessage: string;
  let flyinStyle: FlyinStyles;
  let flyinTimeout: number;

  export const show = ({
    message,
    timeout = 5000,
    style
  }: FlyinConfig): void => {
    flyinMessage = message;
    flyinStyle = style;
    isVisible = true;

    flyinTimeout = window.setTimeout(() => (isVisible = false), timeout);
  };

  const onClose = (): void => {
    window.clearTimeout(flyinTimeout);
    isVisible = false;
  };
</script>

{#if isVisible}
  <div
    class="absolute top-0 left-0 w-full text-white font-bold"
    class:bg-red-400={flyinStyle === FlyinStyles.error}
    class:bg-green-400={flyinStyle === FlyinStyles.success}
    class:bg-yellow-400={flyinStyle === FlyinStyles.info}
    transition:fly={{ y: -100, duration: 300 }}>
    <div class="max-w-4xl mx-auto flex py-4 px-4 sm:px-8 lg:px-10">
      {#if flyinStyle === FlyinStyles.info}
        <AlertTriangle class="w-6 h-6 mr-4" stroke-width="3" />
      {:else if flyinStyle === FlyinStyles.error}
        <XCircle class="w-6 h-6 mr-4" stroke-width="3" />
      {:else if flyinStyle === FlyinStyles.success}
        <CircleCheck class="w-6 h-6 mr-4" stroke-width="3" />
      {/if}
      <span>{flyinMessage}</span>
      <Button
        class="flex items-center ml-auto font-bold"
        on:click={onClose}
        btnType={ButtonStyles.link}>
        Close
        <Cross class="w-5 h-5" stroke-width="3" />
      </Button>
    </div>
  </div>
{/if}
