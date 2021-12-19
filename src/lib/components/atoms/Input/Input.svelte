<script lang="ts">
  export let name: string;
  export let label: string;
  export let value: string | number | string[];
  export let error = '';
  export let required = false;

  // Show label only to screen-readers
  // https://tailwindcss.com/docs/screen-readers
  export let labelSrOnly = false;
</script>

<div class="container" data-sr-only={labelSrOnly} data-required={required}>
  <label for={name}>
    {label}
  </label>
  <input id={name} {...$$restProps} bind:value />
  {#if error}
    <span class="error">
      {error}
    </span>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  .container[data-sr-only='true'] > label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .container[data-required='true'] > label::after {
    content: '*';
    margin-inline-start: 0.25rem;
  }

  label {
    margin-block-end: 0.5rem;
  }

  input {
    outline: none;

    padding: 0.5rem 0.75rem;
    border: 1px solid hsla(var(--neutral-300));
    border-radius: 0.25rem;

    background-color: hsla(var(--neutral-100));
    color: hsla(var(--gray-900));
  }

  input:focus,
  input:active {
    box-shadow: 0 0 0 1px hsla(var(--primary-400));
  }

  .error {
    margin-block-start: 0.25rem;

    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;
    color: hsl(var(--secondary-500));
  }
</style>
