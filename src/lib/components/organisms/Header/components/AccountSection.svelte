<script type="ts">
  import { Button } from '$lib/components/atoms';
  import { Account } from '$lib/components/Icons';
</script>

<div class="flex">
  <button class="px-2 bg-gray-400">
    <Account />
  </button>
  <Button href="/login" class="hidden sm:flex">Login</Button>
</div>
