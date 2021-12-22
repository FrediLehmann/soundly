<script type="ts" context="module">
  import {
    HomeLink,
    HeaderLinkCombo,
    SignupForm
  } from '$lib/components/page/signup';
  import { goto } from '$app/navigation';

  import { Signup } from '$lib/api/auth';
  import { Flyin } from '$lib/components/atoms';
  import { userStore } from '$lib/store/user';
  import { onMount } from 'svelte';
</script>

<script type="ts">
  let flyin: Flyin;
  let submitting = false;

  const signup = async (email: string, pwd: string, username: string) => {
    submitting = true;

    try {
      await Signup(email, pwd, { username });
      flyin.show('Successfull signed up', 'success');
    } catch (e) {
      flyin.show(e.message, 'error');
    } finally {
      submitting = false;
    }
  };

  onMount(() => $userStore.isSignedIn && goto('/profile'));
</script>

<svelte:head>
  <title>Sign up</title>
</svelte:head>

<HomeLink />
<HeaderLinkCombo />
<SignupForm {signup} {submitting} />

<Flyin bind:this={flyin} />
