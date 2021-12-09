<script type="ts">
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let style: 'primary' | 'secondary' | 'ghost' | 'link' = 'secondary';
</script>

<button on:click {type} data-type={style} {...$$restProps}>
  <slot />
</button>

<style>
  button {
    --white: 0, 0%, 100%;
    --black: 224, 100%, 11%;
    --transparent: 0, 0, 0;
    --blue-500: 204, 88%, 44%;
    --gray-400: 0, 0%, 85%;

    display: flex;
    gap: 0.5rem;

    cursor: pointer;

    padding-block: 0.5rem;
    padding-inline: 0.75rem;

    border: none;
    border-radius: 0.125rem;

    font-weight: 600;
  }

  button:disabled {
    cursor: default;
    box-shadow: none;
    opacity: 0.7;
  }

  button[data-type='primary'] {
    color: hsla(var(--white));
    background-color: hsla(var(--blue-500));
  }

  button[data-type='primary']:hover:not(:disabled) {
    box-shadow: 0 0 0 2px hsla(var(--blue-500), 50%);
  }

  button[data-type='primary']:focus:not(:disabled),
  button[data-type='primary']:active:not(:disabled) {
    box-shadow: 0 0 0 1px hsla(var(--white), 50%),
      0 0 0 3px hsla(var(--blue-500), 50%), 0 0 #0000;
  }

  button[data-type='secondary'] {
    color: hsla(var(--black), 100%);
    background-color: hsla(var(--gray-400));
  }

  button[data-type='secondary']:hover:not(:disabled) {
    box-shadow: 0 0 0 2px hsla(var(--gray-400), 50%);
  }

  button[data-type='secondary']:focus:not(:disabled),
  button[data-type='secondary']:active:not(:disabled) {
    box-shadow: 0 0 0 1px hsla(var(--white)),
      0 0 0 3px hsla(var(--gray-400), 50%), 0 0 #0000;
  }

  button[data-type='ghost'] {
    background-color: hsla(var(--transparent), 0);
    color: hsla(var(--blue-500));
    border: 1px solid hsla(var(--blue-500));
  }

  button[data-type='ghost']:hover:not(:disabled) {
    background-color: hsla(var(--blue-500));
    color: hsla(var(--white));
  }

  button[data-type='ghost']:focus:not(:disabled),
  button[data-type='ghost']:active:not(:disabled) {
    box-shadow: 0 0 0 1px hsla(var(--white)),
      0 0 0 3px hsla(var(--blue-500), 50%), 0 0 #0000;
  }

  button[data-type='link'] {
    background-color: hsla(var(--transparent));
    color: hsla(var(--blue-500));
  }
  button[data-type='link']:hover:not(:disabled) {
    text-decoration: underline;
  }

  button[data-type='link']:focus:not(:disabled),
  button[data-type='link']:active:not(:disabled) {
    background-color: hsla(var(--blue-500), 10%);
  }
</style>
