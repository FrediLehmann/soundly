<script type="ts" context="module">
  import { goto } from '$app/navigation';

  import { Signin } from '$lib/api/auth';
  import { Button, Link, Flyin, FlyinStyles } from '$lib/components/atoms';
  import {
    BackLink,
    EmailInput,
    PasswordInput
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
      flyin.show({ message: e.message, style: FlyinStyles.error });
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

<BackLink href="/" class="mb-2">Home</BackLink>
<section class="flex mb-6 items-baseline">
  <h1 class="text-3xl mr-2">Sign in</h1>
  <span class="mr-1">/</span>
  <Link href="/signup" sveltekit:prefetch class="min-w-16 text-center">
    Sign up
  </Link>
</section>
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
