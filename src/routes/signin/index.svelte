<script type="ts" context="module">
  export const prerender = true;
</script>

<script type="ts">
  import { goto } from '$app/navigation';

  import { Signin } from '$lib/api/auth';
  import {
    Button,
    ButtonStyles,
    Link,
    Flyin,
    FlyinStyles
  } from '$lib/components/atoms';
  import {
    BackLink,
    EmailInput,
    PasswordInput
  } from '$lib/components/molecules';
  import { userStore } from '$lib/store/user';
  import { onMount } from 'svelte';

  let flyin: Flyin;
  let email: EmailInput;
  let pwd: PasswordInput;
  let submitting = false;

  const signin = async () => {
    submitting = true;
    if (!email.validate() || !pwd.validate(false)) return;

    try {
      const { user, session, error } = await Signin(email.get(), pwd.get());
      if (error) throw error;
      userStore.set({ isSignedIn: true, user, session });
      goto('/profile');
    } catch (e) {
      flyin.show({ message: e.message, style: FlyinStyles.error });
    } finally {
      submitting = false;
    }
  };

  let user;
  userStore.subscribe(u => (user = u));

  onMount(() => user.isSignedIn && goto('/profile'));
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
  <Button
    disabled={submitting}
    type="submit"
    btnType={ButtonStyles.primary}
    class="mt-2">
    Sign in
  </Button>
</form>
<Link href="/forgotpassword" sveltekit:prefetch class="text-sm mt-2">
  Forgot password?
</Link>

<Flyin bind:this={flyin} />
