<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

  import Logo from './Logo.svelte';
</script>

<Meta
  title="Atoms/Logo"
  component={Logo}
  argTypes={{
    color: {
      control: { type: 'select' },
      options: ['black', 'white', 'primary'],
      table: {
        defaultValue: {
          summary: 'primary'
        },
        type: {
          summary: 'Which color the logo should be'
        }
      }
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'big'],
      table: {
        defaultValue: {
          summary: 'small'
        },
        type: {
          summary: 'The size of the logo.'
        }
      }
    },
    href: {
      control: { type: 'string' },
      table: {
        type: {
          summary: 'Link somewehere on click'
        }
      }
    }
  }} />

<Template let:args>
  <div class="container">
    <Logo {...args} size="small" />
    <Logo {...args} size="medium" />
    <Logo {...args} size="big" />
  </div>
</Template>

<Story name="Black" args={{ color: 'black' }} />

<Story name="White" args={{ color: 'white' }} />

<Story name="Primary" args={{ color: 'primary' }} />

<style>
  .container {
    background-color: lightgray;
    padding: 20px;

    display: flex;
    flex-direction: column;
  }
</style>
