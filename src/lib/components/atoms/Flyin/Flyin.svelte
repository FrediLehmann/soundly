<script lang="ts" context="module">
  import { fly } from 'svelte/transition';
  import { Icon, CloseButton } from './components';
</script>

<script lang="ts">
  let open = false;
  let message: string;
  let style: string;
  let timer: number;

  /**
   * Open the flyin component with the settings provided.
   * @param flyinMessage the message to show in the flyin.
   * @param flyinStyle style of the flyin.
   * @param [showFor=5000] - time in ms until the flyin automatically closes.
   */
  export const show = (
    flyinMessage: string,
    flyinStyle: 'info' | 'error' | 'success',
    showFor = 5000
  ): void => {
    message = flyinMessage;
    style = flyinStyle;
    open = true;

    timer = window.setTimeout(() => (open = false), showFor);
  };

  const onClose = (): void => {
    window.clearTimeout(timer);
    open = false;
  };
</script>

{#if open}
  <div
    class="flyin"
    data-type={style}
    transition:fly={{ y: -100, duration: 300 }}>
    <div class="content">
      <Icon {style} />
      <span class="text">{message}</span>
      <CloseButton {onClose} />
    </div>
  </div>
{/if}

<style>
  :root {
    --yellow: 60, 80%, 48%;
  }
  .flyin {
    color: hsla(var(--neutral-900));
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;

    z-index: 100;
  }

  .flyin[data-type='info'] {
    background-color: hsla(var(--yellow));
  }

  .flyin[data-type='success'] {
    background-color: hsla(var(--primary-500));
  }

  .flyin[data-type='error'] {
    background-color: hsla(var(--secondary-400));
  }

  .content {
    display: flex;

    max-width: 56rem;

    margin-inline: auto;
    padding-block: 1rem;
    padding-inline: 2rem;

    font-weight: 500;
  }

  .text {
    align-self: center;
    margin-inline-start: 1rem;
  }
</style>
