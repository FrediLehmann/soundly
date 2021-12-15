<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import { userEvent, within } from '@storybook/testing-library';

  import Link from './Link.svelte';
  import { Settings } from '../../Icons';
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

  <div class="box">
    <Link {...args} on:click={e => e.preventDefault()} href="#">Link</Link>
  </div>
  <div class="box">
    <Link
      {...args}
      on:click={e => e.preventDefault()}
      href="#"
      aria-label="settings">
      <Settings />
    </Link>
  </div>
  <div class="box">
    <Link {...args} on:click={e => e.preventDefault()} href="#"
      >Button<Settings /></Link>
  </div>
  <div class="box">
    <Link {...args} on:click={e => e.preventDefault()} href="#"
      ><Settings />Button</Link>
  </div>
  <div class="box">
    <Link {...args} on:click={e => e.preventDefault()} href="#" disabled
      >Button</Link>
  </div>
</Template>

<Story
  name="No style"
  args={{ style: 'none' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole('link');

    links.forEach(link => {
      userEvent.hover(link);
      userEvent.unhover(link);
      link.focus();
      link.blur();
    });
  }} />

<Story
  name="Default style"
  args={{ style: 'default' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole('link');

    links.forEach(link => {
      userEvent.hover(link);
      userEvent.unhover(link);
      link.focus();
      link.blur();
    });
  }} />

<Story
  name="Primary style"
  args={{ style: 'primary' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole('link');

    links.forEach(link => {
      userEvent.hover(link);
      userEvent.unhover(link);
      link.focus();
      link.blur();
    });
  }} />

<Story
  name="Secondary style"
  args={{ style: 'secondary' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole('link');

    links.forEach(link => {
      userEvent.hover(link);
      userEvent.unhover(link);
      link.focus();
      link.blur();
    });
  }} />

<Story
  name="Ghost style"
  args={{ style: 'ghost' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole('link');

    links.forEach(link => {
      userEvent.hover(link);
      userEvent.unhover(link);
      link.focus();
      link.blur();
    });
  }} />

<Story
  name="Link style"
  args={{ style: 'link' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole('link');

    links.forEach(link => {
      userEvent.hover(link);
      userEvent.unhover(link);
      link.focus();
      link.blur();
    });
  }} />

<style>
  .box {
    margin: 12px;
  }
</style>
