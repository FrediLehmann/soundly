<script lang="ts" context="module">
  import { HeaderLinkCombo } from '$lib/components/molecules';
</script>

<HeaderLinkCombo href="/signin">
  <svelte:fragment slot="headingText">Sign up</svelte:fragment>
  <svelte:fragment slot="linkText">Sign in</svelte:fragment>
</HeaderLinkCombo>
