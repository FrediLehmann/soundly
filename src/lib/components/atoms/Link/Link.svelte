<script type="ts">
  export let href: string;
  export let style:
    | 'none'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'ghost'
    | 'link' = 'default';
</script>

<a {href} data-type={style} {...$$restProps}>
  <slot />
</a>

<style>
  a[data-type='default'] {
    display: block;
    color: rgba(29, 78, 216, 1);
  }
  a[data-type='default']:hover {
    text-decoration: underline;
  }

  a {
    --white: 0, 0%, 100%;
    --black: 224, 100%, 11%;
    --transparent: 0, 0, 0;
    --blue-500: 204, 88%, 40%;
    --gray-400: 0, 0%, 85%;

    display: flex;
    justify-content: center;
    gap: 0.5rem;

    cursor: pointer;

    padding-block: 0.5rem;
    padding-inline: 0.75rem;

    border: none;
    border-radius: 0.125rem;

    font-weight: 600;
  }

  a:disabled {
    cursor: default;
    box-shadow: none;
    opacity: 0.7;
  }

  a[data-type='primary'] {
    color: hsla(var(--white));
    background-color: hsla(var(--blue-500));
  }

  a[data-type='primary']:hover:not(:disabled) {
    box-shadow: 0 0 0 2px hsla(var(--blue-500), 50%);
  }

  a[data-type='primary']:focus:not(:disabled),
  a[data-type='primary']:active:not(:disabled) {
    box-shadow: 0 0 0 1px hsla(var(--white), 50%),
      0 0 0 3px hsla(var(--blue-500), 50%), 0 0 #0000;
  }

  a[data-type='secondary'] {
    color: hsla(var(--black), 100%);
    background-color: hsla(var(--gray-400));
  }

  a[data-type='secondary']:hover:not(:disabled) {
    box-shadow: 0 0 0 2px hsla(var(--gray-400), 50%);
  }

  a[data-type='secondary']:focus:not(:disabled),
  a[data-type='secondary']:active:not(:disabled) {
    box-shadow: 0 0 0 1px hsla(var(--white)),
      0 0 0 3px hsla(var(--gray-400), 50%), 0 0 #0000;
  }

  a[data-type='ghost'] {
    background-color: hsla(var(--transparent), 0);
    color: hsla(var(--blue-500));
    border: 1px solid hsla(var(--blue-500));
  }

  a[data-type='ghost']:hover:not(:disabled) {
    background-color: hsla(var(--blue-500));
    color: hsla(var(--white));
  }

  a[data-type='ghost']:focus:not(:disabled),
  a[data-type='ghost']:active:not(:disabled) {
    box-shadow: 0 0 0 1px hsla(var(--white)),
      0 0 0 3px hsla(var(--blue-500), 50%), 0 0 #0000;
  }

  a[data-type='link'] {
    background-color: hsla(var(--transparent));
    color: hsla(var(--blue-500));
  }
  a[data-type='link']:hover:not(:disabled) {
    text-decoration: underline;
  }

  a[data-type='link']:focus:not(:disabled),
  a[data-type='link']:active:not(:disabled) {
    background-color: hsla(var(--blue-500), 10%);
  }
</style>
