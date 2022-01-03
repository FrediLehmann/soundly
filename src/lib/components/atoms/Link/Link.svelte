<script lang="ts">
  export let href: string;
</script>

<a {href} {...$$restProps}>
  <slot />
</a>

<style>
  a {
    display: flex;
    gap: 0.5rem;

    align-items: center;

    color: hsla(var(--primary-700));

    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    cursor: pointer;
    text-decoration: underline;
  }

  a:focus,
  a:active {
    color: hsla(var(--secondary-600));
  }
</style>
