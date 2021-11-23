<script type="ts">
  import { Button, ButtonTypes, Input } from '$lib/components/atoms';
  import { ForgotPassword, ConfirmReset } from '$lib/api/auth';
  import { EmailInput, PasswordInput } from '$lib/components/molecules';
  import { goto } from '$app/navigation';

  let email;
  let pwd;

  let code: string;
  let inputCode: boolean = false;
  let codeRequired: string = '';

  const resetPassword = async () => {
    if (!email.validate()) return;

    try {
      // await ForgotPassword(email.get());
      inputCode = true;
    } catch (e) {
      console.log(e);
    }
  };

  const confirmReset = async () => {
    if (!code) {
      codeRequired = 'Provide reset code';
      return;
    }

    codeRequired = '';

    if (!pwd.validate()) return;

    try {
      await ConfirmReset(email.get(), code, pwd.get());
      goto('/');
    } catch (e) {
      console.log(e);
    }
  };
</script>

<EmailInput bind:this={email} />
{#if inputCode}
  <Input
    required
    type="text"
    name="code"
    label="Reset code"
    error={codeRequired}
    bind:value={code}
  />
  <PasswordInput bind:this={pwd} label="New Password" />
  <Button class="mt-3" btnType={ButtonTypes.Primary} on:click={confirmReset}>
    Reset password
  </Button>
{:else}
  <Button class="mt-3" btnType={ButtonTypes.Primary} on:click={resetPassword}>
    Reset password
  </Button>
{/if}
