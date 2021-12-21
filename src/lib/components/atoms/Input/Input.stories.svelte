<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import { userEvent, within } from '@storybook/testing-library';

  import Input from './Input.svelte';
</script>

<Meta
  title="Atoms/Input"
  component={Input}
  argTypes={{
    name: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'Input identification'
        }
      }
    },
    label: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'Input label text'
        }
      }
    },
    value: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'The value of the input, which can be bound'
        }
      }
    },
    error: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'Error text, in case there is an validation error'
        }
      }
    },
    required: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'Sets the input as required (showing the * symbol)'
        }
      }
    },
    labelSrOnly: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary:
            'Show or hide the label from the UI without hidding it from screen readers.'
        }
      }
    }
  }} />

<Template let:args>
  <Input {...args} />
</Template>

<Story
  name="With label"
  args={{ name: 'Test', label: 'This Input' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole('textbox');
    userEvent.type(input, 'Inputting a text, here.');
  }} />

<Story
  name="Disabled"
  args={{ name: 'Test', label: 'This Input', disabled: true }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole('textbox');
    userEvent.type(input, 'Inputting a text, here.');
  }} />

<Story
  name="With error"
  args={{ name: 'Test', label: 'This Input', error: 'There is an error' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole('textbox');
    userEvent.type(input, 'Inputting a text, here.');
  }} />

<Story
  name="Required"
  args={{ name: 'Test', label: 'This Input', required: true }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole('textbox');
    userEvent.type(input, 'Inputting a text, here.');
  }} />

<Story
  name="Hidden label"
  args={{ name: 'Test', label: 'This Input', labelSrOnly: true }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole('textbox');
    userEvent.type(input, 'Inputting a text, here.');
  }} />
