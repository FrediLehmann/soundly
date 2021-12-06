<script lang="ts" context="module">
  import { Button, ButtonStyles } from '$lib/components/atoms';
  import { Cross } from '$lib/components/Icons';
</script>

<Button
  class="flex items-center ml-auto font-bold"
  on:click
  btnType={ButtonStyles.link}>
  Close
  <Cross class="w-5 h-5" stroke-width="3" />
</Button>
