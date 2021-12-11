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
   * @param {string} flyinMessage the message to show in the flyin.
   * @param {'info' | 'error' | 'success'} flyinStyle style of the flyin.
   * @param {number} [showFor=5000] - time in ms until the flyin automatically closes.
   */
  export const show = (
    flyinMessage: string,
    flyinStyle: 'info' | 'error' | 'success',
    showFor: number = 5000
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
      <span>{message}</span>
      <CloseButton {onClose} />
    </div>
  </div>
{/if}

<style>
  .flyin {
    --white: 0, 0%, 100%;
    --yellow: 54, 100%, 70%;
    --red: 0, 80%, 61%;
    --green: 125, 90%, 41%;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
  }

  .flyin[data-type='info'] {
    background-color: hsla(var(--yellow));
  }

  .flyin[data-type='success'] {
    background-color: hsla(var(--green));
  }

  .flyin[data-type='error'] {
    background-color: hsla(var(--red));
  }

  .content {
    display: flex;

    max-width: 56rem;

    margin-inline: auto;
    padding-block: 1rem;
    padding-inline: 2rem;

    color: hsla(var(--white));
    font-weight: 600;
  }
</style>
