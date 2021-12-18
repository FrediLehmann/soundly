<script type="ts">
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let style: 'primary' | 'secondary' | 'ghost' | 'link' = 'secondary';
</script>

<button on:click {type} data-type={style} {...$$restProps}>
  <slot />
</button>

<style>
  button {
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    gap: 0.5rem;

    cursor: pointer;

    padding-block: 0.5rem;
    padding-inline: 0.75rem;

    border: none;
    border-radius: 0.125rem;

    font-weight: 600;

    align-items: center;
  }

  button:disabled {
    cursor: default;
    box-shadow: none;
    opacity: 0.7;
  }

  button[data-type='primary'] {
    color: hsla(var(--neutral-900));
    background-color: hsla(var(--primary));
  }

  button[data-type='primary']:hover:not(:disabled) {
    box-shadow: 0 0 0 2px hsla(var(--primary-400));
  }

  button[data-type='primary']:focus:not(:disabled),
  button[data-type='primary']:active:not(:disabled) {
    box-shadow: 0 0 0 1px hsla(var(--neutral-000), 50%),
      0 0 0 3px hsla(var(--primary-400)), 0 0 #0000;
  }

  button[data-type='secondary'] {
    color: hsla(var(--neutral-900), 100%);
    background-color: hsla(var(--neutral-400));
  }

  button[data-type='secondary']:hover:not(:disabled) {
    box-shadow: 0 0 0 2px hsla(var(--neutral-200));
  }

  button[data-type='secondary']:focus:not(:disabled),
  button[data-type='secondary']:active:not(:disabled) {
    box-shadow: 0 0 0 1px hsla(var(--neutral-000)),
      0 0 0 3px hsla(var(--neutral-200)), 0 0 #0000;
  }

  button[data-type='ghost'] {
    background-color: hsla(var(--transparent), 0);
    color: hsla(var(--primary-700));
    border: 1px solid hsla(var(--primary-700));
  }

  button[data-type='ghost']:hover:not(:disabled) {
    background-color: hsla(var(--primary-700));
    color: hsla(var(--neutral-000));
  }

  button[data-type='ghost']:focus:not(:disabled),
  button[data-type='ghost']:active:not(:disabled) {
    box-shadow: 0 0 0 1px hsla(var(--neutral-000)),
      0 0 0 3px hsla(var(--primary-600)), 0 0 #0000;
  }

  button[data-type='link'] {
    background-color: hsla(var(--transparent));
    color: hsla(var(--primary-700));
  }
  button[data-type='link']:hover:not(:disabled) {
    text-decoration: underline;
  }

  button[data-type='link']:focus:not(:disabled),
  button[data-type='link']:active:not(:disabled) {
    background-color: hsla(var(--primary-700), 10%);
  }
</style>
