<script lang="ts">
  import { goto } from '$app/navigation';

  import { Button } from '$lib/components/atoms';
  import { AlertTriangle } from '$lib/Icons';
  import { supabase } from '$lib/supabase';

  let isDeleting = false;

  const deleteAccount = async () => {
    await supabase.from('profiles').update({ deleted: true });
    await supabase.auth.signOut();

    goto('/');
  };
</script>

<section>
  <h2>Delete Account</h2>
  <p>
    Once an account is delted it cannot be recovered. The deletion might take
    some time to complete. You will not necessarely be informed when the
    deletion is completed.
  </p>
  {#if isDeleting}
    <div class="warning">
      <AlertTriangle width="2rem" height="2rem" />
      <p>
        Are you sure you want to delete your account and all connected data?
        This cannot be reverted and all data will be lost forever.
      </p>
    </div>
    <Button on:click={() => (isDeleting = false)}>Cancel</Button>
    <Button style="danger" on:click={deleteAccount}>Delete</Button>
  {:else}
    <Button style="danger" on:click={() => (isDeleting = true)}
      >Delete Account</Button>
  {/if}
</section>

<style>
  h2 {
    font-size: 1.2rem;
  }

  .warning {
    display: flex;
    gap: 1rem;
    background-color: hsla(var(--secondary-100));

    border: 1px solid hsla(var(--secondary-500));
    border-radius: 0.5rem;

    padding: 0.75rem 1rem;
    margin-block-end: 1rem;
  }

  .warning > p {
    margin: 0;
  }

  section {
    max-width: 75%;
  }
</style>
