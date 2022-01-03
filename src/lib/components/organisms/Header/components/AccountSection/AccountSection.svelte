<script lang="ts" context="module">
  import { Button } from '$lib/components/atoms';
  import { Account } from '$lib/Icons';

  import { supabase } from '$lib/supabase';
</script>

<script lang="ts">
  import { userStore } from '$lib/store';
</script>

<div>
  <Button href="/profile" style="ghost" aria-label="Profile">
    <Account />
  </Button>
  {#if $userStore.isSignedIn}
    <Button style="ghost" on:click={() => supabase.auth.signOut()}>
      Sign out
    </Button>
  {:else}
    <Button href="/signin" style="ghost">Sign in</Button>
  {/if}
</div>

<style>
  div {
    display: flex;
    gap: 0.25rem;
  }
</style>
