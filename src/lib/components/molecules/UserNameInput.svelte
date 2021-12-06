<script lang="ts" context="module">
  import { Input } from '$lib/components/atoms';
</script>

<script lang="ts">
  let username = '';
  let error = '';

  export const validate = (): boolean => {
    if (!username) {
      error = 'Username is required.';
      return false;
    }

    // TODO: validate username with BE

    return true;
  };

  export const get = (): string => username;
</script>

<Input
  required
  type="text"
  name="username"
  label="Username"
  {error}
  bind:value={username}
  {...$$restProps} />
