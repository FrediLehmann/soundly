<script type="ts">
  import { Link, LinkStyles } from '$lib/components/atoms';
  import { Account } from '$lib/components/Icons';
</script>

<div class="flex">
  <button class="px-2 bg-gray-400">
    <Account />
  </button>
  <Link
    href="/login"
    class="hidden sm:flex px-4 py-0"
    prefetch
    style={LinkStyles.buttonSecondary}
  >
    Login
  </Link>
</div>
