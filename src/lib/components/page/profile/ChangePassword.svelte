<script lang="ts" context="module">
  import { Input, Button, Flyin } from '$lib/components/atoms';
  import { AlertTriangle } from '$lib/Icons';
  import { supabase } from '$lib/supabase';
</script>

<script lang="ts">
  let flyin: Flyin;
  let editMode = false;
  let passwordError = '';
  let newPwd1 = '';
  let newPwd2 = '';

  const updatePwd = async () => {
    if (newPwd1 !== newPwd2) {
      passwordError =
        'Password verification failed. Please make sure the spelling of your password is correct.';
      return;
    }

    const { error } = await supabase.auth.update({ password: newPwd1 });
    if (error) {
      passwordError =
        'Something went wrong saving your new password. Please try again later.';
    } else {
      passwordError = '';
      newPwd1 = '';
      newPwd2 = '';
      editMode = false;
      flyin.show('Successfully changed password.', 'success');
    }
  };
</script>

<section>
  <h2>Password</h2>
  <p>
    Be sure to use a safe password to limit access to your account. Your
    password should contain at least 8 characters, containing lower- and
    uppercase letters, numbers and signs.
  </p>
  {#if editMode}
    <div class="input">
      <Input
        name="password"
        label="Password"
        type="password"
        required
        bind:value={newPwd1} />
    </div>
    <div class="input">
      <Input
        name="password"
        label="Repeat Password"
        type="password"
        required
        bind:value={newPwd2} />
    </div>
    {#if passwordError}
      <div class="warning">
        <div>
          <AlertTriangle width="1.75rem" height="1.75rem" />
        </div>
        <p>{passwordError}</p>
      </div>
    {/if}
    <Button on:click={() => (editMode = false)}>Cancel</Button>
    <Button style="primary" on:click={updatePwd}>Save new Password</Button>
  {:else}
    <Button on:click={() => (editMode = true)}>Change</Button>
  {/if}
</section>

<Flyin bind:this={flyin} />

<style>
  h2 {
    font-size: 1.2rem;
  }

  .input {
    max-width: 70%;
    margin-block-end: 1rem;
  }

  .warning {
    display: flex;
    align-items: center;
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

  .warning > div {
    flex-shrink: 0;
  }

  section {
    max-width: 75%;
  }
</style>
