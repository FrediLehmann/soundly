<script type="ts" context="module">
  import { Button, Input } from '$lib/components/atoms';
</script>

<script type="ts">
  export let signin: svelte.JSX.FormEventHandler<HTMLFormElement>;
  export let submitting: boolean;
</script>

<form on:submit|preventDefault={signin}>
  <Input
    required
    type="email"
    name="email"
    label="Email"
    title="Please enter your email."
    disabled={submitting} />
  <Input
    required
    type="password"
    name="password"
    label="Password"
    title="Please enter your password."
    disabled={submitting} />
  <Button disabled={submitting} type="submit" style="primary" class="mbs-2">
    Sign in
  </Button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
