<script lang="ts">
  import type { FlyinConfig } from './FlyinConfig.interface';
  import { FlyinStyles } from './FlyinStyles.enum';

  import { fly } from 'svelte/transition';
  import { Icon, CloseButton } from './components';

  let isVisible = true;
  let flyinMessage: string = 'test';
  let flyinStyle: FlyinStyles = FlyinStyles.error;
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
    class="flyinContainer"
    data-type={flyinStyle}
    transition:fly={{ y: -100, duration: 300 }}>
    <div class="flyinContent">
      <Icon {flyinStyle} />
      <span>{flyinMessage}</span>
      <CloseButton on:click={onClose} />
    </div>
  </div>
{/if}

<style>
  .flyinContainer {
    @apply absolute top-0 left-0 w-full text-white font-bold;
  }

  .flyinContainer[data-type='info'] {
    @apply bg-yellow-400;
  }

  .flyinContainer[data-type='success'] {
    @apply bg-green-400;
  }

  .flyinContainer[data-type='error'] {
    @apply bg-red-400;
  }

  .flyinContent {
    @apply max-w-4xl mx-auto flex py-4 px-4 sm:px-8 lg:px-10;
  }
</style>
