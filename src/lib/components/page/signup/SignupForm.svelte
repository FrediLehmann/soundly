<script type="ts" context="module">
  import { Button, Input } from '$lib/components/atoms';

  const Signupform = 'Signup';
</script>

<script type="ts">
  export let signup: (
    email: string,
    password: string,
    username: string
  ) => void;
  export let submitting: boolean;

  let emailError = '';
  let pwdError = '';
  let userNameError = '';

  const submit = (e: any) => {
    signup(
      e.target.email.value,
      e.target.password.value,
      e.target.username.value
    );
  };

  const click = async () => {
    const email = document.forms[Signupform].email;
    const pwd = document.forms[Signupform].password;
    const username = document.forms[Signupform].username;

    if (email.validity.valid && pwd.validity.valid && username.validity.valid) {
      document.getElementById(`${Signupform}_submit`).click();
      return;
    }

    emailError = email.validationMessage;
    pwdError = pwd.validationMessage;
    userNameError = username.validationMessage;
  };
</script>

<form on:submit|preventDefault={submit} class="flex flex-col gap-3">
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
    type="text"
    name="username"
    label="Username"
    title="Please enter a username."
    error={userNameError}
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
