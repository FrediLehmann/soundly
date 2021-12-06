<script type="ts" context="module">
  import { Search } from '$lib/components/Icons';
  import { Button, Input } from '$lib/components/atoms';
</script>

<div class="flex w-full">
  <Input
    name="Search"
    label="Search"
    value=""
    labelSrOnly={true}
    placeholder="Search"
    class="w-full py-0" />
  <Button class="px-2" aria-label="Search">
    <Search />
  </Button>
</div>
