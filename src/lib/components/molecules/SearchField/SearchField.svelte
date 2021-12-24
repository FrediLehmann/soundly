<script type="ts" context="module">
  import { Search } from '$lib/Icons';
</script>

<div>
  <input type="text" name="Search" aria-label="Search" placeholder="Search" />
  <button aria-label="Search">
    <Search stroke-width="3" width="1.3rem" height="1.3rem" />
  </button>
</div>

<style>
  div {
    display: flex;
    width: 100%;
  }

  input {
    outline: none;
    padding: 0.25rem 1rem;
    width: 100%;

    font-size: 1.5rem;

    color: hsla(var(--neutral-700));
    background-color: hsla(var(--neutral-100));

    border: 1px solid hsla(var(--neutral-300));
    border-start-start-radius: 0.125rem;
    border-end-start-radius: 0.125rem;
  }

  input:focus,
  input:active {
    box-shadow: 0 0 0 1px hsla(var(--primary-400));
  }

  button {
    cursor: pointer;
    background: hsla(var(--primary))
      linear-gradient(
        20deg,
        hsla(var(--primary), 0.6) 20%,
        hsla(var(--secondary), 0.6) 80%
      );

    color: hsla(var(--neutral-000));

    padding-inline: 1rem;

    border: none;
    border-start-end-radius: 0.125rem;
    border-end-end-radius: 0.125rem;
  }

  button:hover {
    box-shadow: 0 0 0 2px hsla(var(--primary-400));
  }

  button:focus,
  button:active {
    box-shadow: 0 0 0 1px hsla(var(--neutral-000), 50%),
      0 0 0 3px hsla(var(--primary-400)), 0 0 #0000;
  }
</style>
