<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

  import Flyin from './Flyin.svelte';

  let flyin;
</script>

<Meta
  title="Atoms/Flyin"
  component={Flyin}
  args={{ message: 'Information for the user.' }}
  argTypes={{
    message: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'Text to show in the flyin',
          detail: 'What information is shown to the user.'
        }
      }
    },
    style: {
      control: { type: 'select' },
      options: ['success', 'error', 'info'],
      table: {
        type: {
          summary: 'Type of flyin message',
          detail:
            'The flyin is used to show different information to the user, based on events. The style is of this message is indication what kind of event happended.'
        }
      }
    },
    showFor: {
      control: { type: 'number' },
      table: {
        type: {
          summary: 'Time for which the flyin should be shown'
        }
      }
    }
  }} />

<Template let:args>
  <Flyin bind:this={flyin} />
  <button
    on:click={() => flyin.show(args.message, args.style, 5000)}
    class="bg-black">
    Show flyin
  </button>
</Template>

<Story name="Success" args={{ style: 'success' }} />

<Story name="Error" args={{ style: 'error' }} />

<Story name="Info" args={{ style: 'info' }} />
