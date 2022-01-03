<script lang="ts" context="module">
  import {
    HomeLink,
    HeaderLinkCombo,
    ForgotPwdLink,
    SigninForm
  } from '$lib/components/page/signin';

  import { Signin } from '$lib/api/auth';
  import { Flyin } from '$lib/components/atoms';
  import { userStore } from '$lib/store';
  import { goto } from '$app/navigation';
</script>

<script lang="ts">
  let flyin: Flyin;
  let submitting = false;

  const signin = async (email: string, pwd: string): Promise<void> => {
    submitting = true;

    try {
      const { user, session, error } = await Signin(email, pwd);
      if (error) throw error;

      userStore.set({ isSignedIn: true, user, session });
      goto('/');
    } catch (e) {
      flyin.show(e.message, 'error');
    } finally {
      submitting = false;
    }
  };
</script>

<svelte:head>
  <title>Sign in</title>
</svelte:head>

<HomeLink />
<HeaderLinkCombo />
<SigninForm {signin} {submitting} />
<ForgotPwdLink />

<Flyin bind:this={flyin} />
