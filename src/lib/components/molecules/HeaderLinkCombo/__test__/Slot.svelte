<script>
  export let Component;
  export let HeadingText;
  export let LinkText;
  export let href;
</script>

<svelte:component this={Component} {href}>
  <svelte:fragment slot="headingText">{HeadingText}</svelte:fragment>
  <svelte:fragment slot="linkText">{LinkText}</svelte:fragment>
</svelte:component>
