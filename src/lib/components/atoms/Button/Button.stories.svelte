<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import { userEvent, within } from '@storybook/testing-library';

  import Button from './Button.svelte';
  import { Settings } from '../../../Icons';
</script>

<Meta
  title="Atoms/Button"
  component={Button}
  argTypes={{
    href: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'If href is provided component renders as <a /> tag'
        }
      }
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      table: {
        defaultValue: {
          summary: 'button'
        },
        type: {
          summary: 'HTML button type.',
          detail:
            'Defines the HTML button type. This will change the behavior of the button. For forms use the submit type.'
        }
      }
    },
    style: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'link'],
      table: {
        defaultValue: {
          summary: 'secondary'
        },
        type: {
          summary: 'Decides how the button will be rendered.',
          detail:
            'There are different button style to render. Choose the correct styling based on your needs.'
        }
      }
    }
  }} />

<Template let:args>
  <div class="box">
    <Button {...args} type={args.type}>Button</Button>
  </div>
  <div class="box">
    <Button {...args} type={args.type} aria-label="settings">
      <Settings />
    </Button>
  </div>
  <div class="box">
    <Button {...args} type={args.type}>Button<Settings /></Button>
  </div>
  <div class="box">
    <Button {...args} type={args.type}><Settings />Button</Button>
  </div>
  <div class="box">
    <Button {...args} type={args.type} disabled>Button</Button>
  </div>
  <div class="box">
    <Button {...args} href="#" type={args.type}>Button as a tag</Button>
  </div>
</Template>

<Story
  name="Primary"
  args={{ style: 'primary' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');

    buttons.forEach(async button => {
      userEvent.hover(button);
      userEvent.unhover(button);
      button.focus();
      button.blur();
    });
  }} />

<Story
  name="Secondary"
  args={{ style: 'secondary' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');

    buttons.forEach(async button => {
      userEvent.hover(button);
      userEvent.unhover(button);
      button.focus();
      button.blur();
    });
  }} />

<Story
  name="Ghost"
  args={{ style: 'ghost' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');

    buttons.forEach(async button => {
      userEvent.hover(button);
      userEvent.unhover(button);
      button.focus();
      button.blur();
    });
  }} />

<Story
  name="Link"
  args={{ style: 'link' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');

    buttons.forEach(async button => {
      userEvent.hover(button);
      userEvent.unhover(button);
      button.focus();
      button.blur();
    });
  }} />

<style>
  .box {
    margin: 12px;
  }
</style>
