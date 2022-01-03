<script lang="ts" context="module">
  import { Button, Input } from '$lib/components/atoms';

  const Signupform = 'Signup';
</script>

<script lang="ts">
  export let signup: (email: string, password: string) => void;
  export let submitting: boolean;

  let emailError = '';
  let pwdError = '';

  const submit = (e: any) => {
    signup(e.target.email.value, e.target.password.value);
  };

  const click = async () => {
    const email = document.forms[Signupform].email;
    const pwd = document.forms[Signupform].password;

    if (email.validity.valid && pwd.validity.valid) {
      document.getElementById(`${Signupform}_submit`).click();
      return;
    }

    emailError = email.validationMessage;
    pwdError = pwd.validationMessage;
  };
</script>

<form on:submit|preventDefault={submit} name={Signupform}>
  <Input
    required
    type="email"
    name="email"
    label="Email"
    title="Please enter your email."
    error={emailError}
    disabled={submitting} />
  <Input
    required
    type="password"
    name="password"
    label="Password"
    title="Please enter your password."
    error={pwdError}
    disabled={submitting} />
  <Button disabled={submitting} on:click={click} style="primary" class="mbs-2">
    Sign up
  </Button>
  <input id={`${Signupform}_submit`} type="submit" hidden />
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
