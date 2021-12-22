<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { userEvent, within } from '@storybook/testing-library';

  import BackLink from './BackLink.svelte';
  import ForgotPwdForm from './ForgotPwdForm.svelte';
</script>

<Meta title="Page/ForgotPassword" />

<Story name="Link to go back to login">
  <BackLink />
</Story>

<Story
  name="Forgot pwd form"
  argTypes={{
    resetPassword: {
      control: 'object',
      table: {
        type: {
          summary: 'Reset function which is called on the submit event.'
        }
      }
    },
    submitting: {
      control: 'boolean',
      table: { type: { summary: 'Is set to true while authenticating' } }
    }
  }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByLabelText('Email');
    await userEvent.type(emailInput, 'test@email.com');

    const submitBtn = canvas.getByRole('button');
    await userEvent.click(submitBtn);
  }}>
  <ForgotPwdForm
    resetPassword={(/** @type {any} */ _) => _}
    submitting={false} />
</Story>
