<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

  import Link from './Link.svelte';
  import { Settings } from '../../../Icons';
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
  <div class="box">
    <Link {...args} on:click={e => e.preventDefault()}>Link</Link>
    <Link
      {...args}
      on:click={e => e.preventDefault()}
      href="https://storybook.js.org/">
      Visited Link
    </Link>
    <Link {...args} on:click={e => e.preventDefault()} aria-label="settings">
      <Settings />
    </Link>
    <Link {...args} on:click={e => e.preventDefault()}>
      Button
      <Settings />
    </Link>
    <Link {...args} on:click={e => e.preventDefault()}>
      <Settings />
      Button
    </Link>
  </div>
</Template>

<Story name="Default" args={{ style: 'default' }} />

<style>
  .box {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
</style>
