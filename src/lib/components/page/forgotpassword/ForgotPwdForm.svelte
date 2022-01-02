<script lang="ts" context="module">
  import { Button, Input } from '$lib/components/atoms';

  const forgotPwdForm = 'ForgotPwd';
</script>

<script lang="ts">
  export let resetPassword: (arg0: string) => void;
  export let submitting: boolean;

  let emailError = '';

  const submit = (e: any) => {
    resetPassword(e.target.email.value);
  };

  const click = async () => {
    const email = document.forms[forgotPwdForm].email;

    if (email.validity.valid) {
      document.getElementById(`${forgotPwdForm}_submit`).click();
      return;
    }

    emailError = email.validationMessage;
  };
</script>

<form on:submit|preventDefault={submit} name={forgotPwdForm}>
  <Input
    required
    type="email"
    name="email"
    label="Email"
    title="Please enter your email."
    error={emailError}
    disabled={submitting} />
  <Button disabled={submitting} on:click={click} style="primary" class="mbs-2">
    Reset password
  </Button>
  <input id={`${forgotPwdForm}_submit`} type="submit" hidden />
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
