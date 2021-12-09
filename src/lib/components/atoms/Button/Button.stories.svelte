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
