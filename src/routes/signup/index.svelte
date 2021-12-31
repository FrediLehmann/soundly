<script type="ts" context="module">
  import { supabase } from '$lib/supabase';
  import { Flyin } from '$lib/components/atoms';
  import {
    HomeLink,
    HeaderLinkCombo,
    SignupForm
  } from '$lib/components/page/signup';
  import { goto } from '$app/navigation';
</script>

<script type="ts">
  let flyin: Flyin;
  let submitting = false;

  const submit = async (email: string, pwd: string) => {
    submitting = true;

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password: pwd
      });
      if (error) throw error;

      goto(
        '/?type=success&message=Successfull signed up. Please verify your email address to use Noiceless.'
      );
    } catch (e) {
      flyin.show(e.message, 'error');
    } finally {
      submitting = false;
    }
  };
</script>

<svelte:head>
  <title>Sign up</title>
</svelte:head>

<HomeLink />
<HeaderLinkCombo />
<SignupForm signup={submit} {submitting} />

<Flyin bind:this={flyin} />
