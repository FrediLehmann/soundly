<script type="ts">
  //   import '$lib/api/auth/aws';
  import '../app.css';

  import { PageFrame } from '$lib/components/atoms';
  import { Header } from '$lib/components/organisms';
</script>

<Header />

<PageFrame>
  <slot />
</PageFrame>
