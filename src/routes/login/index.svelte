<script type="ts">
  import { Button, ButtonTypes, Input } from '$lib/components/atoms';
</script>

<h1 class="text-3xl mb-6">Login</h1>
<div class="flex flex-col gap-2 max-w-sm">
  <Input type="email" name="email" label="Email" />
  <Input type="password" name="passowrd" label="Password" />
</div>
<div class="flex gap-2 ml-auto mt-7">
  <Button btnType={ButtonTypes.Secondary}>Sign up</Button>
  <Button btnType={ButtonTypes.Primary}>Sign in</Button>
</div>
