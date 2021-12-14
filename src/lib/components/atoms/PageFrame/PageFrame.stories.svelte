<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

  import PageFrame from './PageFrame.svelte';
</script>

<Meta
  title="Atoms/PageFrame"
  component={PageFrame}
  argTypes={{
    style: {
      control: { type: 'select' },
      options: ['default', 'small'],
      table: {
        defaultValue: {
          summary: 'default'
        },
        type: {
          summary: 'The style of the PageFrame'
        }
      }
    }
  }} />

<Template let:args>
  <PageFrame {...args}><div class="content">Content</div></PageFrame>
</Template>

<Story name="Default" args={{ style: 'default' }} />

<Story name="Small" args={{ style: 'small' }} />

<style>
  .content {
    background-color: green;
    width: 100%;
    height: 100%;
    padding: 12px;
  }
</style>
