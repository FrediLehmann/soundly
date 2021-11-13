<script>
  import '../app.css';

  import { Header } from '$lib/components';
</script>

<Header />

<main class="max-w-6xl mx-auto pt-4 px-4 sm:px-8 lg:px-10">
  <slot />
</main>
