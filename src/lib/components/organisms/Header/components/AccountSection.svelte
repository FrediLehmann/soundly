<script type="ts">
  import { Button } from '$lib/components/atoms';
  import { Account } from '$lib/components/Icons';
</script>

<div class="flex">
  <button class="px-2 bg-gray-400">
    <Account />
  </button>
  <Button class="hidden sm:block" type="submit">Login</Button>
</div>
