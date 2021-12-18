<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import * as IconsExport from './index';

  const IconNames = Object.keys(IconsExport);
  const IconList = Object.values(IconsExport);
</script>

<Meta title="Styleguide/Icons" />

<Story name="Icons">
  <div class="story-container">
    {#each IconList as IE, index}
      <div class="icon-container">
        <h6>{IconNames[index]}</h6>
        <IE width="28px" height="28px" style="align-self: center;" />
      </div>
    {/each}
  </div>
</Story>

<style>
  .story-container {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }

  .icon-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h6 {
    margin: 0px 0px 10px 0px;
    text-align: center;
  }
</style>
