<script type="ts">
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let style: 'primary' | 'secondary' | 'ghost' | 'link' = 'secondary';
</script>

<button on:click {type} data-type={style} {...$$restProps}>
  <slot />
</button>

<style>
  :root {
    --primary-color: hsl(204, 81%, 55%);
    --primary-shadow: hsla(204, 81%, 55%, 50%);
    --white: hsl(0, 0%, 100%);
  }

  button {
    cursor: pointer;

    padding-block: 0.5rem;
    padding-inline: 1.25rem;

    border: none;
    border-radius: 0.125rem;

    font-weight: 600;
  }

  button:disabled {
    cursor: default;
  }

  button[data-type='primary'] {
    color: var(--white);
    background-color: var(--primary-color);
  }

  button[data-type='primary']:hover {
    box-shadow: 0 0 0 2px var(--primary-shadow);
  }

  button[data-type='primary']:focus,
  button[data-type='primary']:active {
    box-shadow: 0 0 0 1px var(--white), 0 0 0 3px var(--primary-shadow),
      0 0 #0000;
  }

  button[data-type='primary']:disabled {
    box-shadow: none;
    opacity: 0.7;
  }
</style>
