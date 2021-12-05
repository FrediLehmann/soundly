<script type="ts">
  import { goto } from '$app/navigation';
  import { Signout } from '$lib/api/auth';

  import {
    Button,
    ButtonStyles,
    Link,
    LinkStyles
  } from '$lib/components/atoms';
  import { Account } from '$lib/components/Icons';
  import { userStore } from '$lib/store/user';
  import { Navigation } from './components';

  let navOpen = false;
  const toggleNav = () => {
    if (isSignedIn) {
      navOpen = !navOpen;
    } else {
      goto('/login');
    }
  };

  let isSignedIn;
  userStore.subscribe(u => (isSignedIn = u.isSignedIn));

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
    btnType={ButtonStyles.none}
    aria-label="Account menu">
    <Account />
  </Button>
  {#if !isSignedIn}
    <Link
      href="/signin"
      class="hidden whitespace-nowrap sm:flex px-4 py-0"
      sveltekit:prefetch
      style={LinkStyles.secondary}>
      Sign in
    </Link>
  {/if}
  {#if isSignedIn}
    <Button
      class="hidden whitespace-nowrap sm:flex px-4 py-0"
      on:click={signout}
      style={ButtonStyles.secondary}>
      Sign out
    </Button>
  {/if}
</div>
