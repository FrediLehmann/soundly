<script lang="ts" context="module">
  import { Logo } from '$lib/components/atoms';

  import { AccountSection, Navigation } from './components';
</script>

<header>
  <Logo href="/" size="medium" />
  <Navigation />
  <AccountSection />
</header>

<style>
  header {
    display: flex;
    margin-inline: auto;
    padding-block: 1rem;
    padding-inline: 0.5rem;
    max-width: 72rem;
    align-items: center;
  }
</style>
