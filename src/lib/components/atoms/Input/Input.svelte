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

<div class="container" data-sr-only={labelSrOnly}>
  <label for={name}>
    {label}
    {#if required}
      <span class="required">*</span>
    {/if}
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
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  label {
    align-self: center;
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

  .required {
    font-variant-numeric: ordinal;
  }

  input {
    padding: 0.25rem 0.75rem;
    background-color: hsla(var(--gray-100));
    border: 1px solid hsla(var(--gray-400));
    border-radius: 0.125rem;
    color: hsla(var(--gray-900));
  }

  .container[data-sr-only='true'] > input {
    column-span: 3;
  }
  .container[data-sr-only='false'] > input {
    column-span: 2;
  }

  .error {
    margin-block-start: 0.25rem;
    grid-column-start: 2;
    column-span: 2;

    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;
    color: hsl(0, 72%, 50%);
  }
</style>
