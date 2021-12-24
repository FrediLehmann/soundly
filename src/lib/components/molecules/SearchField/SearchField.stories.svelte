<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { userEvent, within } from '@storybook/testing-library';

  import SearchField from './SearchField.svelte';
</script>

<Meta title="Molecules/SearchField" />

<Story
  name="SearchField"
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    userEvent.hover(button);

    const input = canvas.getByRole('textbox');
    userEvent.hover(input);

    userEvent.type(input, 'Search content');
  }}>
  <SearchField />
</Story>
