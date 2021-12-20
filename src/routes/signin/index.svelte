<script type="ts" context="module">
  import { goto } from '$app/navigation';

  import { ArrowLeft } from '$lib/Icons';
  import { Signin } from '$lib/api/auth';
  import { Button, Link, Flyin } from '$lib/components/atoms';
  import {
    EmailInput,
    PasswordInput,
    HeaderLinkCombo
  } from '$lib/components/molecules';
  import { userStore } from '$lib/store/user';
  import { onMount } from 'svelte';
</script>

<script type="ts">
  let flyin: Flyin;
  let email: EmailInput;
  let pwd: PasswordInput;
  let submitting = false;

  const signin = async () => {
    if (!email.validate() || !pwd.validate(false)) return;
    submitting = true;

    try {
      const { user, session, error } = await Signin(email.get(), pwd.get());
      if (error) throw error;
      $userStore = { isSignedIn: true, user, session };
      goto('/profile');
    } catch (e) {
      flyin.show(e.message, 'error');
    } finally {
      submitting = false;
    }
  };

  onMount(() => {
    $userStore.isSignedIn && goto('/profile');
  });
</script>

<svelte:head>
  <title>Sign in</title>
</svelte:head>

<Link href="/" class="mb-2">
  <ArrowLeft width="1.25rem" height="1.25rem" />
  Home
</Link>
<HeaderLinkCombo href="/signup">
  <svelte:fragment slot="headingText">Sign in</svelte:fragment>
  <svelte:fragment slot="linkText">Sign up</svelte:fragment>
</HeaderLinkCombo>
<form on:submit|preventDefault={signin} class="flex flex-col gap-3">
  <EmailInput disabled={submitting} bind:this={email} />
  <PasswordInput disabled={submitting} bind:this={pwd} />
  <Button disabled={submitting} type="submit" style="primary" class="mt-2">
    Sign in
  </Button>
</form>
<Link href="/forgotpassword" sveltekit:prefetch class="text-sm mt-2">
  Forgot password?
</Link>

<Flyin bind:this={flyin} />
