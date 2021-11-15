<script type="ts">
  import '$lib/api/auth/aws';
  import '../app.css';

  import { Header } from '$lib/components/organisms';
</script>

<Header />

<main class="max-w-4xl mx-auto pt-4 px-4 sm:px-8 lg:px-10">
  <slot />
</main>
