<script lang="ts">
  export let href: string = undefined;
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let style: 'primary' | 'secondary' | 'ghost' | 'link' | 'danger' =
    'secondary';
</script>

{#if href}
  <a {href} {type} data-type={style} {...$$restProps}>
    <slot />
  </a>
{:else}
  <button on:click {type} data-type={style} {...$$restProps}>
    <slot />
  </button>
{/if}

<style>
  a,
  button {
    text-decoration: none;
    box-sizing: border-box;

    display: inline-flex;
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

  a:disabled,
  button:disabled {
    cursor: default;
    box-shadow: none;
    opacity: 0.7;
  }

  a[data-type='primary'],
  button[data-type='primary'] {
    color: hsla(var(--neutral-900));
    background-color: hsla(var(--primary));
  }

  a[data-type='primary']:hover:not(:disabled),
  button[data-type='primary']:hover:not(:disabled) {
    box-shadow: 0 0 0 2px hsla(var(--primary-400));
  }

  a[data-type='primary']:focus:not(:disabled),
  button[data-type='primary']:focus:not(:disabled),
  a[data-type='primary']:active:not(:disabled),
  button[data-type='primary']:active:not(:disabled) {
    box-shadow: 0 0 0 1px hsla(var(--neutral-000), 50%),
      0 0 0 3px hsla(var(--primary-400)), 0 0 #0000;
  }

  a[data-type='secondary'],
  button[data-type='secondary'] {
    color: hsla(var(--neutral-900), 100%);
    background-color: hsla(var(--neutral-400));
  }

  a[data-type='secondary']:hover:not(:disabled),
  button[data-type='secondary']:hover:not(:disabled) {
    box-shadow: 0 0 0 2px hsla(var(--neutral-200));
  }

  a[data-type='secondary']:focus:not(:disabled),
  button[data-type='secondary']:focus:not(:disabled),
  a[data-type='secondary']:active:not(:disabled),
  button[data-type='secondary']:active:not(:disabled) {
    box-shadow: 0 0 0 1px hsla(var(--neutral-000)),
      0 0 0 3px hsla(var(--neutral-200)), 0 0 #0000;
  }

  a[data-type='ghost'],
  button[data-type='ghost'] {
    background-color: hsla(var(--transparent), 0);
    color: hsla(var(--primary-700));
    border: 1px solid hsla(var(--primary-700));
  }

  a[data-type='ghost']:hover:not(:disabled),
  button[data-type='ghost']:hover:not(:disabled) {
    background-color: hsla(var(--primary-700));
    color: hsla(var(--neutral-000));
  }

  a[data-type='ghost']:focus:not(:disabled),
  button[data-type='ghost']:focus:not(:disabled),
  a[data-type='ghost']:active:not(:disabled),
  button[data-type='ghost']:active:not(:disabled) {
    box-shadow: 0 0 0 1px hsla(var(--neutral-000)),
      0 0 0 3px hsla(var(--primary-600)), 0 0 #0000;
  }

  a[data-type='danger'],
  button[data-type='danger'] {
    background-color: hsla(var(--transparent), 0);
    color: hsla(var(--secondary-500));
    border: 1px solid hsla(var(--secondary-500));
  }

  a[data-type='danger']:hover:not(:disabled),
  button[data-type='danger']:hover:not(:disabled) {
    background-color: hsla(var(--secondary-500));
    color: hsla(var(--neutral-000));
  }

  a[data-type='danger']:focus:not(:disabled),
  button[data-type='danger']:focus:not(:disabled),
  a[data-type='danger']:active:not(:disabled),
  button[data-type='danger']:active:not(:disabled) {
    box-shadow: 0 0 0 1px hsla(var(--neutral-000)),
      0 0 0 3px hsla(var(--seconary-600)), 0 0 #0000;
  }

  a[data-type='link'],
  button[data-type='link'] {
    background-color: hsla(var(--transparent));
    color: hsla(var(--primary-700));
  }
  a[data-type='link']:hover:not(:disabled),
  button[data-type='link']:hover:not(:disabled) {
    text-decoration: underline;
  }

  a,
  button[data-type='link']:focus:not(:disabled),
  a,
  button[data-type='link']:active:not(:disabled) {
    background-color: hsla(var(--primary-700), 10%);
  }
</style>
