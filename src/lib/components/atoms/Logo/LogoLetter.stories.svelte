<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

  import LogoLetter from './LogoLetter.svelte';
</script>

<Meta
  title="Atoms/LogoLetter"
  component={LogoLetter}
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
    }
  }} />

<Template let:args>
  <div class="container">
    <LogoLetter {...args} size="small" />
    <LogoLetter {...args} size="medium" />
    <LogoLetter {...args} size="big" />
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
