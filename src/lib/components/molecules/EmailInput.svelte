<script lang="ts">
  import { validateEmail } from '$lib/helpers';
  import { Input } from '$lib/components/atoms';

  let email: string;
  let emailError: string;

  export const validate = (): boolean => {
    if (!email) {
      emailError = 'Email is required.';
      return false;
    }

    if (!validateEmail(email)) {
      emailError = 'Invalid Email address.';
      return false;
    }

    emailError = '';
    return true;
  };

  export const get = (): string => email;
</script>

<Input
  required
  type="email"
  name="email"
  label="Email"
  error={emailError}
  bind:value={email}
  {...$$restProps}
/>
