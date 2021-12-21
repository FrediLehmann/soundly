<script type="ts" context="module">
  import {
    HomeLink,
    HeaderLinkCombo,
    ForgotPwdLink,
    SigninForm
  } from '$lib/components/page/signin';

  import { goto } from '$app/navigation';

  import { Signin } from '$lib/api/auth';
  import { Flyin } from '$lib/components/atoms';
  import { userStore } from '$lib/store/user';
</script>

<script type="ts">
  let flyin: Flyin;
  let submitting = false;

  const signin = async ({ email, pwd }) => {
    submitting = true;

    try {
      const { user, session, error } = await Signin(email.get(), pwd.get());
      if (error) throw error;
      $userStore = { isSignedIn: true, user, session };
      goto('/profile');
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
