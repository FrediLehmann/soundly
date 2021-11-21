<script type="ts">
  import { Signup } from '$lib/api/auth';
  import { Button, ButtonTypes, Input } from '$lib/components/atoms';
  import { validatePassword, validateEmail } from '$lib/helpers';

  let email: string;
  let emailError: string;
  let pwd: string;
  let pwdRequired: string;
  let pwdErros: string[] = [];
  let signupError: string;

  const signin = e => console.log('Login', e);

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
    } catch (e) {
      signupError = e.message;
    }
  };
</script>

<h1 class="text-3xl mb-6">Login</h1>
<div class="flex flex-col gap-3 max-w-sm">
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
<div class="flex gap-2 ml-auto mt-7">
  <Button btnType={ButtonTypes.Secondary} on:click={signup}>Sign up</Button>
  <Button btnType={ButtonTypes.Primary} on:click={signin}>Sign in</Button>
</div>
