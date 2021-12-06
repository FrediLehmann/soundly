<script lang="ts" context="module">
  import type { FlyinConfig } from './FlyinConfig.interface';
  import type { FlyinStyles } from './FlyinStyles.enum';

  import { fly } from 'svelte/transition';
  import { Icon, CloseButton } from './components';
</script>

<script lang="ts">
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
