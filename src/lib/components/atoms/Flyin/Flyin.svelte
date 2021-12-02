<script lang="ts">
  import type { FlyinConfig } from './FlyinConfig.interface';

  import { Button, ButtonStyles } from '$lib/components/atoms';
  import { Cross } from '$lib/components/Icons';

  let isVisible = false;
  let message = 'Message';

  export const show = (config: FlyinConfig): void => {
    console.log(config);
    isVisible = true;
  };

  export const onClose = (): void => {
    isVisible = false;
  };
</script>

{#if isVisible}
  <div class="absolute top-0 left-0 w-full">
    <div class="max-w-4xl mx-auto flex py-4 px-4 sm:px-8 lg:px-10">
      <span>{message}</span>
      <Button
        class="flex items-center ml-auto"
        on:click={onClose}
        btnType={ButtonStyles.Ghost}>
        Close
        <Cross class="w-5 h-5" />
      </Button>
    </div>
  </div>
{/if}
