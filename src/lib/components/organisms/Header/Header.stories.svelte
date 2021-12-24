<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { userEvent, within } from '@storybook/testing-library';

  import { Navigation } from './components';
</script>

<Meta title="Organisms/Header" />

<Story
  name="Navigation part"
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getAllByRole('link')[0];

    userEvent.hover(link);
  }}>
  <div class="navcontainer">
    <Navigation />
  </div>
</Story>

<style>
  .navcontainer {
    display: flex;
  }
</style>
