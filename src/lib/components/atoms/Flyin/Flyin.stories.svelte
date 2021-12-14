<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

  import { expect } from '@storybook/jest';
  import {
    within,
    userEvent,
    waitForElementToBeRemoved
  } from '@storybook/testing-library';

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
    class="btn"
    on:click={() => flyin.show(args.message, args.style, 5000)}>
    Show flyin
  </button>
</Template>

<Story
  name="Success"
  args={{ style: 'success' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.click(canvas.getByRole('button'));
    expect(canvas.getByText('Information for the user.')).toBeTruthy();

    userEvent.click(canvas.getByText('Close'));
    expect(
      waitForElementToBeRemoved(canvas.getByText('Information for the user.'))
    ).resolves;

    userEvent.click(canvas.getByText('Show flyin'));
    expect(canvas.getByText('Information for the user.')).toBeTruthy();
  }} />

<Story
  name="Error"
  args={{ style: 'error' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.click(canvas.getByRole('button'));
    expect(canvas.getByText('Information for the user.')).toBeTruthy();

    userEvent.click(canvas.getByText('Close'));
    expect(
      waitForElementToBeRemoved(canvas.getByText('Information for the user.'))
    ).resolves;

    userEvent.click(canvas.getByText('Show flyin'));
    expect(canvas.getByText('Information for the user.')).toBeTruthy();
  }} />

<Story
  name="Info"
  args={{ style: 'info' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.click(canvas.getByRole('button'));
    expect(canvas.getByText('Information for the user.')).toBeTruthy();

    userEvent.click(canvas.getByText('Close'));
    expect(
      waitForElementToBeRemoved(canvas.getByText('Information for the user.'))
    ).resolves;

    userEvent.click(canvas.getByText('Show flyin'));
    expect(canvas.getByText('Information for the user.')).toBeTruthy();
  }} />

<style>
  .btn {
    margin-top: 100px;
    border: 1px solid black;
    background-color: transparent;
    color: black;
  }
</style>
