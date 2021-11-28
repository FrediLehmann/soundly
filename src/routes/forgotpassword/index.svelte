<script type="ts" context="module">
  export const prerender = true;
</script>

<script type="ts">
  import { Button, ButtonStyles, Input } from '$lib/components/atoms';
  import { ForgotPassword, ConfirmReset } from '$lib/api/auth';
  import {
    BackLink,
    EmailInput,
    PasswordInput
  } from '$lib/components/molecules';
  import { goto } from '$app/navigation';

  let email;
  let pwd;

  let code: string;
  let inputCode = false;
  let codeRequired = '';
  let resetError = '';

  const resetPassword = async () => {
    if (!email.validate()) return;

    try {
      await ForgotPassword(email.get());
      inputCode = true;
    } catch (e) {
      resetError = e.message;
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
      resetError = e.message;
    }
  };
</script>

<svelte:head>
  <title>Reset Password</title>
</svelte:head>

<BackLink href="/login" class="mb-4">Back</BackLink>
<div class="flex flex-col gap-3">
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
    {#if resetError}
      <span class="text-red-500 text-xs font-semibold">{resetError}</span>
    {/if}
    <Button btnType={ButtonStyles.Primary} on:click={confirmReset}>
      Confirm new password
    </Button>
  {:else}
    {#if resetError}
      <span class="text-red-500 text-xs font-semibold">{resetError}</span>
    {/if}
    <Button btnType={ButtonStyles.Primary} on:click={resetPassword}>
      Reset password
    </Button>
  {/if}
</div>
