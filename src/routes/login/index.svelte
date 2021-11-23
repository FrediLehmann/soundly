<script type="ts">
  import { ArrowLeft } from '$lib/components/Icons';
  import { Signup, Signin } from '$lib/api/auth';
  import { Button, ButtonTypes, Link } from '$lib/components/atoms';
  import { EmailInput, PasswordInput } from '$lib/components/molecules';

  let email;
  let pwd;
  let signupError: string;

  let successfullSignedUp: boolean = false;

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
      successfullSignedUp = true;
    } catch (e) {
      signupError = e.message;
    }
  };
</script>

<Link href="/" prefetch class="flex mb-2 items-center font-semibold">
  <ArrowLeft class="w-5 h-5" />
  <span>Home</span>
</Link>
<h1 class="text-3xl mb-6">Login</h1>
<div class="flex flex-col gap-3">
  <EmailInput bind:this={email} />
  <PasswordInput bind:this={pwd} />
</div>
{#if signupError}
  <span class="text-red-500 text-xs font-semibold">{signupError}</span>
{/if}
<div class="flex gap-2 mt-7">
  <Button btnType={ButtonTypes.Secondary} on:click={signup}>Sign up</Button>
  <Button btnType={ButtonTypes.Primary} on:click={signin}>Sign in</Button>
</div>
<Link href="/forgotpassword" prefetch class="text-sm mt-2">
  Forgot password
</Link>

{#if successfullSignedUp}
  <div
    class="mt-3 mx-auto max-w-lg bg-green-400 text-white font-semibold w-full rounded px-4 py-3"
  >
    <span>Successfully signed up.</span>
    <!-- <a class="underline" href="/">go back to the homepage</a> -->
  </div>
{/if}
