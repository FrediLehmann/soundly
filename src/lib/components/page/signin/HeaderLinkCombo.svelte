<script lang="ts" context="module">
  import { HeaderLinkCombo } from '$lib/components/molecules';
</script>

<HeaderLinkCombo href="/signup">
  <svelte:fragment slot="headingText">Sign in</svelte:fragment>
  <svelte:fragment slot="linkText">Sign up</svelte:fragment>
</HeaderLinkCombo>
