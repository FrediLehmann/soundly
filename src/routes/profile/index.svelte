<script lang="ts" context="module">
  import { goto } from '$app/navigation';

  import { BackLink } from '$lib/components/molecules';
  import { userStore } from '$lib/store/user';
  import type { User, Session } from '@supabase/supabase-js';
  import { onMount } from 'svelte';
</script>

<script lang="ts">
  let user: { isSignedIn: boolean; user?: User; session?: Session };
  userStore.subscribe(u => (user = u));

  onMount(() => !user.isSignedIn && goto('/signin'));
</script>

<BackLink href="/" class="mb-2 pt-4">Home</BackLink>
<section class="grid-cols-2">
  <label class="col-span-1" for="email">Email</label>
  <input class="col-span-1" id="email" />
</section>
