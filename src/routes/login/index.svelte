<script type="ts">
  import { ArrowLeft } from '$lib/components/Icons';
  import { Signup, Signin } from '$lib/api/auth';
  import { Button, ButtonTypes, Input } from '$lib/components/atoms';
  import { validatePassword, validateEmail } from '$lib/helpers';

  let email: string;
  let emailError: string;
  let pwd: string;
  let pwdRequired: string;
  let pwdErros: string[] = [];
  let signupError: string;

  let successfullSignedUp: boolean = false;

  const signin = async () => {
    if (!email) emailError = 'Email is required.';
    if (!pwd) pwdRequired = 'Password is required.';
    if (!email || !pwd) return;

    emailError = '';
    pwdRequired = '';

    if (!validateEmail(email)) {
      emailError = 'Invalid Email address.';
      return;
    }

    try {
      const user = await Signin(email, pwd);
      console.log(user);
    } catch (e) {
      signupError = e.message;
    }
  };

  const signup = async () => {
    if (!email) emailError = 'Email is required.';
    if (!pwd) pwdRequired = 'Password is required.';
    if (!email || !pwd) return;

    emailError = '';
    pwdRequired = '';

    const validatedPwd = validatePassword(pwd);
    if (!validatedPwd.isValid) {
      pwdErros = validatedPwd.errors;
      return;
    } else {
      pwdErros = [];
    }

    if (!validateEmail(email)) {
      emailError = 'Invalid Email address.';
      return;
    }

    try {
      await Signup(email, pwd);
      successfullSignedUp = true;
    } catch (e) {
      signupError = e.message;
    }
  };
</script>

<a href="/" class="flex text-blue-700 mb-2 items-center font-semibold">
  <ArrowLeft class="w-5 h-5" />
  <span>Home</span>
</a>
<h1 class="text-3xl mb-6">Login</h1>
<div class="flex flex-col gap-3">
  <Input
    type="email"
    name="email"
    label="Email"
    error={emailError}
    bind:value={email}
  />
  <Input
    type="password"
    name="passowrd"
    label="Password"
    error={pwdRequired}
    bind:value={pwd}
  />
</div>
<ul class="pl-4 mt-4 list-disc text-red-500 text-xs font-semibold">
  {#each pwdErros as e}
    <li>{e}</li>
  {/each}
</ul>
{#if signupError}
  <span class="text-red-500 text-xs font-semibold">{signupError}</span>
{/if}
<div class="flex gap-2 mt-7">
  <Button btnType={ButtonTypes.Secondary} on:click={signup}>Sign up</Button>
  <Button btnType={ButtonTypes.Primary} on:click={signin}>Sign in</Button>
</div>
<a href="/forgotpassword" class="text-blue-700 text-sm mt-2 block">
  Forgot password
</a>

{#if successfullSignedUp}
  <div
    class="mt-3 mx-auto max-w-lg bg-green-400 text-white font-semibold w-full rounded px-4 py-3"
  >
    <span>Successfully signed up.</span>
    <!-- <a class="underline" href="/">go back to the homepage</a> -->
  </div>
{/if}
