<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import { userEvent, within } from '@storybook/testing-library';

  import Link from './Link.svelte';
</script>

<Meta
  title="Atoms/Link"
  component={Link}
  argTypes={{
    href: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'Location to link to'
        }
      }
    },
    style: {
      control: { type: 'select' },
      options: ['none', 'default', 'primary', 'secondary', 'ghost', 'link'],
      table: {
        defaultValue: {
          summary: 'default'
        },
        type: {
          summary: 'The style of the Link'
        }
      }
    }
  }} />

<Template let:args>
  <Link {...args} on:click={e => e.preventDefault()} href="#">Link</Link>
</Template>

<Story
  name="No style"
  args={{ style: 'none' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');

    await userEvent.hover(link);
    await userEvent.unhover(link);
    link.focus();
    link.blur();
  }} />

<Story
  name="Default style"
  args={{ style: 'default' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');

    await userEvent.hover(link);
    await userEvent.unhover(link);
    link.focus();
    link.blur();
  }} />

<Story
  name="Primary style"
  args={{ style: 'primary' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');

    await userEvent.hover(link);
    await userEvent.unhover(link);
    link.focus();
    link.blur();
  }} />

<Story
  name="Secondary style"
  args={{ style: 'secondary' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');

    await userEvent.hover(link);
    await userEvent.unhover(link);
    link.focus();
    link.blur();
  }} />

<Story
  name="Ghost style"
  args={{ style: 'ghost' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');

    await userEvent.hover(link);
    await userEvent.unhover(link);
    link.focus();
    link.blur();
  }} />

<Story
  name="Link style"
  args={{ style: 'link' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');

    await userEvent.hover(link);
    await userEvent.unhover(link);
    link.focus();
    link.blur();
  }} />
