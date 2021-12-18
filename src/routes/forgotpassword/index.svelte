<script type="ts" context="module">
  import { Button, Flyin, Link } from '$lib/components/atoms';
  import { ArrowLeft } from '$lib/Icons';
  import { ForgotPassword } from '$lib/api/auth';
  import { EmailInput } from '$lib/components/molecules';
  import { userStore } from '$lib/store/user';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
</script>

<script type="ts">
  let flyin: Flyin;
  let email: EmailInput;
  let submitting = false;

  const resetPassword = async () => {
    if (!email.validate()) return;
    submitting = true;

    try {
      let { error } = await ForgotPassword(email.get());
      if (error) throw error;
      flyin.show('A reset link has been sent to your email!', 'info');
    } catch (e) {
      flyin.show(e.message, 'error');
    } finally {
      submitting = false;
    }
  };

  onMount(() => $userStore.isSignedIn && goto('/profile'));
</script>

<svelte:head>
  <title>Reset Password</title>
</svelte:head>

<Link href="/signin" class="mb-4">
  <ArrowLeft width="1.25rem" height="1.25rem" />
  Back
</Link>
<form on:submit|preventDefault={resetPassword} class="flex flex-col gap-3">
  <EmailInput disabled={submitting} bind:this={email} />
  <Button disabled={submitting} style="primary" type="submit" class="mt-2">
    Reset password
  </Button>
</form>

<Flyin bind:this={flyin} />
