<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

  import Button from './Button.svelte';
  import { Settings } from '../../Icons';
</script>

<Meta
  title="Atoms/Button"
  component={Button}
  argTypes={{
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset']
    },
    style: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'link']
    }
  }} />

<Template let:args>
  <div class="box">
    <Button {...args} type={args.type}>Button</Button>
  </div>
  <div class="box">
    <Button {...args} type={args.type}><Settings /></Button>
  </div>
  <div class="box">
    <Button {...args} type={args.type}><span>Button</span><Settings /></Button>
  </div>
  <div class="box">
    <Button {...args} type={args.type}><Settings /><span>Button</span></Button>
  </div>
  <div class="box">
    <Button {...args} type={args.type} disabled>Button</Button>
  </div>
</Template>

<Story name="Primary" args={{ style: 'primary' }} />

<Story name="Secondary" args={{ style: 'secondary' }} />

<Story name="Ghost" args={{ style: 'ghost' }} />

<Story name="Link" args={{ style: 'link' }} />

<style>
  .box {
    margin: 12px;
  }
</style>
