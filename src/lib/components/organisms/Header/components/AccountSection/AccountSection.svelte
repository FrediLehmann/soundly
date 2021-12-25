<script type="ts" context="module">
  import { Button } from '$lib/components/atoms';
  import { Account } from '$lib/Icons';
</script>

<div>
  <Button href="/profile" style="ghost" aria-label="Profile">
    <Account />
  </Button>
  <Button href="/signin" style="ghost">Sign in</Button>
</div>

<style>
  div {
    display: flex;
    gap: 0.25rem;
  }
</style>
