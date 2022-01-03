<script lang="ts" context="module">
  import { Button, Flyin, Input } from '$lib/components/atoms';
  import { supabase } from '$lib/supabase';
</script>

<script lang="ts">
  export let username: string;

  let flyin: Flyin;

  let errorMessage = '';

  const changeUsername = async () => {
    if (!username) {
      errorMessage = 'Your username cannot be empty';
      return;
    }

    errorMessage = '';

    const { data, error } = await supabase
      .from('profiles')
      .update({ user_name: username });

    if (error) {
      flyin.show(
        'Your username could not be changed. Maybe your username is already taken.',
        'error'
      );
    } else {
      flyin.show(
        `Your username was seccessfull changed to ${data[0].user_name}.`,
        'success'
      );
    }
  };
</script>

<section>
  <h2>Username</h2>
  <p>
    Your username is <b>public</b>, it will be displayed in various places on
    our platform. It is <b>unique</b>, no two user on the platform can use the
    same username. You can change your username whenever you want as long as the
    new one is not yet taken.
  </p>
  <div class="input">
    <Input
      name="username"
      label="Username"
      type="text"
      labelSrOnly={true}
      required
      error={errorMessage}
      bind:value={username} />
  </div>
  <Button on:click={changeUsername}>Change</Button>
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
