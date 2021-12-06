<script lang="ts" context="module">
  import { validatePassword } from '$lib/helpers';
  import { Input } from '$lib/components/atoms';
</script>

<script lang="ts">
  let pwd: string;
  let pwdRequired: string;
  let pwdErrors: string[] = [];

  export let label = 'Password';

  export const validate = (isSignup: boolean): boolean => {
    if (!pwd) {
      pwdRequired = 'Password is required.';
      return false;
    } else {
      pwdRequired = '';
    }

    if (isSignup) {
      const validationResult = validatePassword(pwd);
      if (!validationResult.isValid) {
        pwdErrors = validationResult.errors;
        return false;
      }
    }

    pwdErrors = [];
    return true;
  };

  export const get = (): string => pwd;
</script>

<Input
  {label}
  required
  type="password"
  name="password"
  error={pwdRequired}
  bind:value={pwd}
  {...$$restProps} />
{#if pwdErrors.length > 0}
  <ul class="list-inside mt-4 list-disc text-red-500 text-xs font-semibold">
    {#each pwdErrors as e}
      <li>{e}</li>
    {/each}
  </ul>
{/if}
