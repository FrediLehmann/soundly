<script lang="ts" context="module">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { supabase } from '$lib/supabase';

  import {
    ChangeMail,
    ChangeUsername,
    ChangePassword,
    DeleteAccount,
    Introduction
  } from '$lib/components/page/profile';
</script>

<script lang="ts">
  let email = '';
  let username = '';

  onMount(async () => {
    let { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('user_id', supabase.auth.user().id);
    if (error) goto('/?type=error&message=Something went wrong.');

    // If there is no profile yet we'll create one
    if (data.length === 0) {
      const res = await supabase
        .from('profiles')
        .insert({ user_id: supabase.auth.user().id });
      if (res.error) goto('/?type=error&message=Something went wrong.');

      data = res.data;
    }

    email = supabase.auth.user().email;
    username = data[0].user_name;
  });
</script>

<Introduction />
<div>
  <ChangeUsername {username} />
  <ChangePassword />
  <ChangeMail {email} />
  <DeleteAccount />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
