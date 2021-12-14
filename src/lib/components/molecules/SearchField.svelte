<script type="ts" context="module">
  import { Search } from '$lib/components/Icons';
  import { Button, Input } from '$lib/components/atoms';
</script>

<div>
  <Input
    name="Search"
    label="Search"
    value=""
    labelSrOnly={true}
    placeholder="Search" />
  <Button aria-label="Search">
    <Search />
  </Button>
</div>

<style>
  div {
    dispaly: flex;
    width: 100%;
  }
</style>
