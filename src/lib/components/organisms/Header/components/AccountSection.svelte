<script type="ts">
  import { ButtonStyles, Link } from '$lib/components/atoms';
  import { Account } from '$lib/components/Icons';
</script>

<div class="flex">
  <button class="px-2 bg-gray-400 hover:bg-gray-500">
    <Account />
  </button>
  <Link
    href="/signup"
    class="hidden sm:flex px-4 py-0"
    sveltekit:prefetch
    style={ButtonStyles.Secondary}
  >
    Login
  </Link>
</div>
