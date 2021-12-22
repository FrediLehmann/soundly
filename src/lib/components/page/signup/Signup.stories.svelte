<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { userEvent, within } from '@storybook/testing-library';

  import HeaderLinkCombo from './HeaderLinkCombo.svelte';
  import HomeLink from './HomeLink.svelte';
  import SignupForm from './SignupForm.svelte';
</script>

<Meta title="Page/Signup" />

<Story name="Header & Link">
  <HeaderLinkCombo />
</Story>

<Story name="Link to homepage">
  <HomeLink />
</Story>

<Story
  name="Sign up form for the page"
  argTypes={{
    signup: {
      control: 'object',
      table: {
        type: {
          summary: 'Signup function which is called on the submit event.'
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

    const pwdInput = canvas.getByLabelText('Password');
    await userEvent.type(pwdInput, 'sldkfjskldf');

    const usernameInput = canvas.getByLabelText('Username');
    await userEvent.type(usernameInput, 'Test-name');

    const submitBtn = canvas.getByRole('button');
    await userEvent.click(submitBtn);
  }}>
  <SignupForm signup={_ => _} submitting={false} />
</Story>
