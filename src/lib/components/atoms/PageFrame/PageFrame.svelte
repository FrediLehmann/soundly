<script lang="ts">
  export let style: 'default' | 'small' = 'default';
  export let marginTop = '0';
</script>

<main
  data-style={style}
  style={`margin-block-start: ${marginTop};`}
  {...$$restProps}>
  <slot />
</main>

<style>
  main[data-style='default'] {
    max-width: 56rem;
    margin-inline: auto;
    padding-inline: 1rem;
    /* default = '  sm:px-8 lg:px-10',*/
  }
  main[data-style='small'] {
    max-width: 32rem;
    margin-inline: auto;
    padding-inline: 1rem;
    /*sm:px-8 lg:px-10' */
  }
</style>
