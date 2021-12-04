<script type="ts">
  import {
    Button,
    ButtonStyles,
    Link,
    LinkStyles
  } from '$lib/components/atoms';
  import { Account } from '$lib/components/Icons';
  import { Navigation } from './components';

  let navOpen = false;
  const toggleNav = () => (navOpen = !navOpen);
</script>

<div class="relative -ml-5">
  {#if navOpen}
    <Navigation />
  {/if}
</div>

<div class="flex">
  <Button
    on:click={toggleNav}
    class="px-2 bg-gray-400 hover:bg-gray-500"
    style={LinkStyles.none}>
    <Account />
  </Button>
  <Link
    href="/signin"
    class="hidden sm:flex px-4 py-0"
    sveltekit:prefetch
    style={ButtonStyles.secondary}>
    Login
  </Link>
</div>
