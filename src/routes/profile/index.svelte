<script lang="ts" context="module">
  import { ArrowLeft } from '$lib/Icons';
  import { Link } from '$lib/components/atoms';
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabase';
  import { goto } from '$app/navigation';
</script>

<script lang="ts">
  let user: { name: string; email: string } = {
    name: '',
    email: ''
  };

  onMount(async () => {
    let { data, error } = await supabase.from('profiles').select();
    if (error) goto('/?type=error&message=Something went wrong.');

    // If there is no profile yet we'll create one
    if (data.length === 0) {
      const res = await supabase
        .from('profiles')
        .insert({ user_id: supabase.auth.user().id });
      if (res.error) goto('/?type=error&message=Something went wrong.');

      data = res.data;
    }

    user.name = data[0].user_name || '';
    user.email = supabase.auth.user().email;
  });
</script>

<section class="grid-cols-2">
  <label class="col-span-1" for="email">Email</label>
  <input class="col-span-1" id="email" value={user.email} />
  <label class="col-span-1" for="username">Username</label>
  <input class="col-span-1" id="username" value={user.name} />
</section>
