<script>
  import { IconSection } from './components';
  import { SearchField } from '$lib/components/molecules';
  import { AccountOptions } from '$lib/components/organisms';
</script>

<header
  class="flex justify-between gap-5 max-w-4xl mx-auto py-4 px-2 sm:px-6 lg:px-8">
  <IconSection />
  <SearchField />
  <AccountOptions />
</header>
