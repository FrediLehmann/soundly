<script type="ts">
  import { Button, ButtonTypes, Input } from '$lib/components/atoms';
  import { validateEmail, validatePassword } from '$lib/helpers';
  import { ForgotPassword, ConfirmReset } from '$lib/api/auth';
  import { goto } from '$app/navigation';

  let code: string;
  let inputCode: boolean = false;
  let pwd: string;
  let pwdRequired: string;
  let pwdErros: string[] = [];
  let email: string;
  let emailError: string = '';

  const resetPassword = async () => {
    if (!validateEmail(email)) {
      emailError = 'Invalid Email address.';
      return;
    }

    emailError = '';

    try {
      await ForgotPassword(email);
      inputCode = true;
    } catch (e) {
      console.log(e);
    }
  };

  const confirmReset = async () => {
    if (!pwd) {
      pwdRequired = 'Password is required.';
      return;
    }

    pwdRequired = '';

    const validatedPwd = validatePassword(pwd);
    if (!validatedPwd.isValid) {
      pwdErros = validatedPwd.errors;
      return;
    } else {
      pwdErros = [];
    }

    try {
      await ConfirmReset(email, code, pwd);
      goto('/');
    } catch (e) {
      console.log(e);
    }
  };
</script>

<Input
  type="email"
  name="email"
  label="Email"
  class="mb-3"
  disabled={inputCode}
  error={emailError}
  bind:value={email}
/>
{#if inputCode}
  <Input
    type="text"
    name="code"
    label="Reset code"
    class="mb-3"
    bind:value={code}
  />
  <Input
    type="password"
    name="passowrd"
    label="Password"
    class="mb-3"
    error={pwdRequired}
    bind:value={pwd}
  />
  <ul class="pl-4 mt-4 list-disc text-red-500 text-xs font-semibold">
    {#each pwdErros as e}
      <li>{e}</li>
    {/each}
  </ul>
  <Button class="mt-3" btnType={ButtonTypes.Primary} on:click={confirmReset}>
    Confirm code
  </Button>
{:else}
  <Button class="mt-3" btnType={ButtonTypes.Primary} on:click={resetPassword}>
    Reset password
  </Button>
{/if}
