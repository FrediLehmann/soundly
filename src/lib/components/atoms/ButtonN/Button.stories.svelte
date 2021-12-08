<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

  import Button from './Button.svelte';
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
  <Button {...args} type={args.type}>Button</Button>
  <Button {...args} type={args.type} disabled>Button</Button>
</Template>

<Story name="Primary" args={{ style: 'primary' }} />

<Story name="Secondary" args={{ style: 'secondary' }} />

<Story name="Ghost" args={{ style: 'ghost' }} />

<Story name="Link" args={{ style: 'link' }} />
