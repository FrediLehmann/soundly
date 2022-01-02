<script lang="ts" context="module">
  import { Button, Flyin, Input } from '$lib/components/atoms';
  import { supabase } from '$lib/supabase';
</script>

<script lang="ts">
  export let email: string;

  let flyin: Flyin;
  let emailError = '';

  let editMode = false;
  const toggleEdit = () => (editMode = !editMode);

  const saveNewEmail = async () => {
    const emailInput: HTMLFormElement =
      document.querySelector('input[id="email"]');

    if (!emailInput.validity.valid) {
      emailError = emailInput.validationMessage;
      return;
    } else {
      emailError = '';
    }

    const { error } = await supabase.auth.update({ email });
    if (error) {
      flyin.show('New email address could not be saved.', 'error');
    } else {
      flyin.show(
        'Email address successfull changed. Please verify your new email address.',
        'success'
      );
      editMode = false;
    }
  };
</script>

<section>
  <h2>Email</h2>
  <p>
    Your email address is used to identify you, such as on login but it is <b
      >not public</b
    >. You can change your email address whenever, but it will trigger an email
    confirmation process.
  </p>
  <div class="input">
    <Input
      name="email"
      label="Email"
      type="email"
      required
      disabled={!editMode}
      error={emailError}
      labelSrOnly={true}
      bind:value={email} />
  </div>
  {#if editMode}
    <Button on:click={toggleEdit}>Cancel</Button>
    <Button style="primary" on:click={saveNewEmail}>Save new Email</Button>
  {:else}
    <Button on:click={toggleEdit}>Change Email</Button>
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

  section {
    max-width: 75%;
  }
</style>
