<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { userEvent, within } from '@storybook/testing-library';

  import ForgotPwdLink from './ForgotPwdLink.svelte';
  import HeaderLinkCombo from './HeaderLinkCombo.svelte';
  import HomeLink from './HomeLink.svelte';
  import SigninForm from './SigninForm.svelte';
</script>

<Meta title="Page/Signin" />

<Story name="Forgot Password Link">
  <ForgotPwdLink />
</Story>

<Story name="Header & Link">
  <HeaderLinkCombo />
</Story>

<Story name="Link to homepage">
  <HomeLink />
</Story>

<Story
  name="Sign in form for the page"
  argTypes={{
    signin: {
      control: 'object',
      table: {
        type: {
          summary: 'Signin function which is called on the submit event.'
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

    const submitBtn = canvas.getByRole('button');
    await userEvent.click(submitBtn);
  }}>
  <SigninForm signin={_ => _} submitting={false} />
</Story>
