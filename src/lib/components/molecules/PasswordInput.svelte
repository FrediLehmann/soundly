<script lang="ts">
  import { validatePassword } from '$lib/helpers';
  import { Input } from '$lib/components/atoms';

  let pwd: string;
  let pwdRequired: string;
  let pwdErros: string[] = [];

  export let label: string = 'Password';

  export const validate = (): boolean => {
    if (!pwd) {
      pwdRequired = 'Password is required.';
      return false;
    } else {
      pwdRequired = '';
    }

    const validationResult = validatePassword(pwd);
    if (!validationResult.isValid) {
      pwdErros = validationResult.errors;
      return false;
    }

    pwdErros = [];
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
/>
<ul class="list-inside mt-4 list-disc text-red-500 text-xs font-semibold">
  {#each pwdErros as e}
    <li>{e}</li>
  {/each}
</ul>
