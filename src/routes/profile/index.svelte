<script lang="ts" context="module">
  import { ArrowLeft } from '$lib/Icons';
  import { Link } from '$lib/components/atoms';
</script>

<Link href="/" class="mb-2 pt-4">
  <ArrowLeft width="1.25rem" height="1.25rem" />
  Home
</Link>
<section class="grid-cols-2">
  <label class="col-span-1" for="email">Email</label>
  <input class="col-span-1" id="email" />
</section>
