<script type="ts" context="module">
  export const prerender = true;
</script>

<script type="ts">
  import { Signup, Signin } from '$lib/api/auth';
  import { Button, ButtonStyles, Link, Flyin } from '$lib/components/atoms';
  import { FlyinStyles } from '$lib/components/atoms/Flyin/FlyinStyles.enum';
  import {
    BackLink,
    EmailInput,
    PasswordInput
  } from '$lib/components/molecules';

  let flyin: Flyin;
  let email: EmailInput;
  let pwd: PasswordInput;
  let signupError: string;

  const signin = async () => {
    if (!email.validate() || !pwd.validate()) return;

    try {
      const user = await Signin(email.get(), pwd.get());
      console.log(user);
    } catch (e) {
      signupError = e.message;
    }
  };

  const signup = async () => {
    if (!email.validate() || !pwd.validate()) return;

    try {
      await Signup(email.get(), pwd.get());
      flyin.show({
        message: 'Successfull signed up',
        style: FlyinStyles.success
      });
    } catch (e) {
      flyin.show({ message: e.message, style: FlyinStyles.error });
    }
  };
</script>

<svelte:head>
  <title>Login to Soundly</title>
</svelte:head>

<BackLink href="/" class="mb-2">Home</BackLink>
<h1 class="text-3xl mb-6">Login</h1>
<div class="flex flex-col gap-3">
  <EmailInput bind:this={email} />
  <PasswordInput bind:this={pwd} />
</div>
{#if signupError}
  <span class="text-red-500 text-xs font-semibold">{signupError}</span>
{/if}
<div class="flex gap-2 mt-7">
  <Button btnType={ButtonStyles.Secondary} on:click={signup}>Sign up</Button>
  <Button btnType={ButtonStyles.Primary} on:click={signin}>Sign in</Button>
</div>
<Link href="/forgotpassword" sveltekit:prefetch class="text-sm mt-2">
  Forgot password
</Link>

<Flyin bind:this={flyin} />
