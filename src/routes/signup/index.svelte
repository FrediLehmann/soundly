<script type="ts" context="module">
  export const prerender = true;
</script>

<script type="ts">
  import { Signup } from '$lib/api/auth';
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
    PasswordInput,
    UserNameInput
  } from '$lib/components/molecules';

  let flyin: Flyin;
  let email: EmailInput;
  let username: UserNameInput;
  let pwd: PasswordInput;
  let submitting = false;

  const signup = async () => {
    submitting = true;
    if (!email.validate() || !pwd.validate(true) || !username.validate())
      return;

    try {
      await Signup(email.get(), pwd.get(), { username: username.get() });
      flyin.show({
        message: 'Successfull signed up',
        style: FlyinStyles.success
      });
    } catch (e) {
      flyin.show({ message: e.message, style: FlyinStyles.error });
    } finally {
      submitting = false;
    }
  };
</script>

<svelte:head>
  <title>Sign up</title>
</svelte:head>

<BackLink href="/" class="mb-2">Home</BackLink>
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
  <Button
    disabled={submitting}
    type="submit"
    btnType={ButtonStyles.primary}
    class="mt-2">
    Sign up
  </Button>
</form>
<Link href="/forgotpassword" sveltekit:prefetch class="text-sm mt-2">
  Forgot password?
</Link>

<Flyin bind:this={flyin} />
