<script type="ts">
  import { ButtonStyles, Link, LinkStyles } from '$lib/components/atoms';
  import { Account } from '$lib/components/Icons';
</script>

<div class="flex">
  <Link
    href="/profile"
    sveltekit:prefetch
    class="px-2 bg-gray-400 hover:bg-gray-500"
    style={LinkStyles.none}
  >
    <Account class="mt-2" />
  </Link>
  <Link
    href="/signin"
    class="hidden sm:flex px-4 py-0"
    sveltekit:prefetch
    style={ButtonStyles.Secondary}
  >
    Login
  </Link>
</div>
