<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { expect } from '@storybook/jest';
  import { userEvent, within } from '@storybook/testing-library';

  import Introduction from './Introduction.svelte';
  import ChangeMail from './ChangeMail.svelte';
  import ChangeUsername from './ChangeUsername.svelte';
  import DeleteAccount from './DeleteAccount.svelte';
</script>

<Meta title="Page/Profile" />

<Story name="Introduction component">
  <Introduction />
</Story>

<Story
  name="Change Email address"
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const changeMode = canvas.getByRole('button');
    await userEvent.click(changeMode);

    const emailInput = canvas.getByLabelText('Email');
    await userEvent.type(emailInput, 'test@email.com');

    const confirmButton = canvas.getByText('Save new Email');
    expect(confirmButton).not.toBeNull();
    const cancelButton = canvas.getByText('Cancel');
    expect(cancelButton).not.toBeNull();

    await userEvent.click(cancelButton);
  }}>
  <ChangeMail email="" />
</Story>

<Story
  name="Change users name"
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const saveMode = canvas.getByRole('button');
    await userEvent.click(saveMode);

    const error = canvas.getByText('Your username cannot be empty');
    expect(error).not.toBeNull();

    const nameInput = canvas.getByLabelText('Username');
    await userEvent.type(nameInput, 'test_user_name');

    await userEvent.click(saveMode);
  }}>
  <ChangeUsername username="" />
</Story>

<Story
  name="Delete account component"
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const deleteMode = canvas.getByRole('button');
    await userEvent.click(deleteMode);

    const confirmButton = canvas.getByText('Delete');
    expect(confirmButton).not.toBeNull();
    const cancelButton = canvas.getByText('Cancel');
    expect(cancelButton).not.toBeNull();

    const warning = canvas.getByText('Are you sure', { exact: false });
    expect(warning).not.toBeNull();
  }}>
  <div class="wrapper">
    <DeleteAccount />
  </div>
</Story>

<style>
  .wrapper {
    max-width: 75%;
  }
</style>
