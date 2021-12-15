<script type="ts" context="module">
  import { goto } from '$app/navigation';

  import { ArrowLeft } from '$lib/components/Icons';
  import { Signup } from '$lib/api/auth';
  import { Button, Link, Flyin } from '$lib/components/atoms';
  import {
    EmailInput,
    PasswordInput,
    UserNameInput
  } from '$lib/components/molecules';
  import { userStore } from '$lib/store/user';
  import { onMount } from 'svelte';
</script>

<script type="ts">
  let flyin: Flyin;
  let email: EmailInput;
  let username: UserNameInput;
  let pwd: PasswordInput;
  let submitting = false;

  const signup = async () => {
    if (!email.validate() || !pwd.validate(true) || !username.validate())
      return;
    submitting = true;

    try {
      await Signup(email.get(), pwd.get(), { username: username.get() });
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

<Link href="/" class="mb-2">
  <ArrowLeft width="1.25rem" height="1.25rem" />
  Home
</Link>
<section class="flex mb-6 items-baseline">
  <h1 class="text-3xl mr-2">Sign up</h1>
  <span class="mr-1">/</span>
  <Link href="/signin" sveltekit:prefetch class="min-w-16 text-center">
    Sign in
  </Link>
</section>
<form on:submit|preventDefault={signup} class="flex flex-col gap-3">
  <EmailInput disabled={submitting} bind:this={email} />
  <UserNameInput disabled={submitting} bind:this={username} />
  <PasswordInput disabled={submitting} bind:this={pwd} />
  <Button disabled={submitting} type="submit" style="primary" class="mt-2">
    Sign up
  </Button>
</form>
<Link href="/forgotpassword" sveltekit:prefetch class="text-sm mt-2">
  Forgot password?
</Link>

<Flyin bind:this={flyin} />
