<script type="ts" context="module">
  import { Button, Input } from '$lib/components/atoms';

  const Signinform = 'Signin';
</script>

<script type="ts">
  export let signin: (email: string, password: string) => void;
  export let submitting: boolean;

  let emailError = '';
  let pwdError = '';

  const submit = (e: any) => {
    signin(e.target.email.value, e.target.password.value);
  };

  const click = async () => {
    const email = document.forms[Signinform].email;
    const pwd = document.forms[Signinform].password;

    if (email.validity.valid && pwd.validity.valid) {
      document.getElementById(`${Signinform}_submit`).click();
      return;
    }

    emailError = email.validationMessage;
    pwdError = pwd.validationMessage;
  };
</script>

<form name={Signinform} autocomplete="on" on:submit|preventDefault={submit}>
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
    Sign in
  </Button>
  <input id={`${Signinform}_submit`} type="submit" hidden />
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
