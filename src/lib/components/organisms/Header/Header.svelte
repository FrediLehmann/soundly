<script type="ts" context="module">
  import { Logo } from '$lib/components/atoms';
  //   import { AccountOptions } from '$lib/components/organisms';

  import { Navigation } from './components';
</script>

<header>
  <Logo size="medium" />
  <Navigation />
  <!-- <AccountOptions /> -->
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    gap: 1.25rem;
    margin-inline: auto;
    padding-block: 1rem;
    padding-inline: 0.5rem;
    max-width: 72rem;
    align-items: center;
  }
</style>
