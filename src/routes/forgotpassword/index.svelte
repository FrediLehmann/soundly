<script lang="ts" context="module">
  import { BackLink, ForgotPwdForm } from '$lib/components/page/forgotpassword';
  import { Flyin } from '$lib/components/atoms';
  import { ForgotPassword } from '$lib/api/auth';
</script>

<script lang="ts">
  let flyin: Flyin;
  let submitting = false;

  const resetPassword = async (email: string) => {
    submitting = true;

    try {
      let { error } = await ForgotPassword(email);
      if (error) throw error;
      flyin.show('A reset link has been sent to your email!', 'info');
    } catch (e) {
      flyin.show(e.message, 'error');
    } finally {
      submitting = false;
    }
  };
</script>

<svelte:head>
  <title>Reset Password</title>
</svelte:head>

<BackLink />
<ForgotPwdForm {resetPassword} {submitting} />

<Flyin bind:this={flyin} />
