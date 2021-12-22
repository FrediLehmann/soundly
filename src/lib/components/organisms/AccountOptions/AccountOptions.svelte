<script type="ts" context="module">
  import { goto } from '$app/navigation';
  import { Signout } from '$lib/api/auth';

  import { Button, Link } from '$lib/components/atoms';
  import { Account } from '$lib/Icons';
  import { userStore } from '$lib/store/user';
  import { Navigation } from './components';
</script>

<script type="ts">
  let navOpen = false;
  const toggleNav = () => {
    if ($userStore.isSignedIn) {
      navOpen = !navOpen;
    } else {
      goto('/signin');
    }
  };

  const signout = async () => {
    const { error } = await Signout();
    if (error) {
      console.error(error);
      return;
    }

    userStore.set({ isSignedIn: false, user: undefined, session: undefined });
  };
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
    aria-label="Account menu">
    <Account />
  </Button>
  {#if !$userStore.isSignedIn}
    <Link
      href="/signin"
      class="hidden whitespace-nowrap sm:flex px-4 py-0"
      style="secondary">
      Sign in
    </Link>
  {/if}
  {#if $userStore.isSignedIn}
    <Button
      class="hidden whitespace-nowrap sm:flex px-4 py-0"
      on:click={signout}
      style="secondary">
      Sign out
    </Button>
  {/if}
</div>
