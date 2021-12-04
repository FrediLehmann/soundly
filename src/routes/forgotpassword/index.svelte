<script type="ts" context="module">
  export const prerender = true;
</script>

<script type="ts">
  import {
    Button,
    ButtonStyles,
    Flyin,
    FlyinStyles
  } from '$lib/components/atoms';
  import { ForgotPassword } from '$lib/api/auth';
  import { BackLink, EmailInput } from '$lib/components/molecules';

  let flyin: Flyin;
  let email: EmailInput;
  let submitting = false;

  const resetPassword = async () => {
    submitting = true;
    if (!email.validate()) return;

    try {
      let { error } = await ForgotPassword(email.get());
      if (error) throw error;
      flyin.show({
        message: 'A reset link has been sent to your email!',
        style: FlyinStyles.info
      });
    } catch (e) {
      flyin.show({ message: e.message, style: FlyinStyles.error });
    } finally {
      submitting = false;
    }
  };
</script>

<svelte:head>
  <title>Reset Password</title>
</svelte:head>

<BackLink href="/signin" class="mb-4">Back</BackLink>
<form on:submit|preventDefault={resetPassword} class="flex flex-col gap-3">
  <EmailInput disabled={submitting} bind:this={email} />
  <Button
    disabled={submitting}
    btnType={ButtonStyles.primary}
    type="submit"
    class="mt-2">
    Reset password
  </Button>
</form>

<Flyin bind:this={flyin} />
