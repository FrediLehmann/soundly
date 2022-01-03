/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/svelte';

import ChangePassword from './ChangePassword.svelte';

describe('<ChangePassword /> component', () => {
  test('renders correctly', () => {
    const { component } = render(ChangePassword);
    expect(component).toMatchSnapshot();
  });

  test('renders edit mode correctly', async () => {
    const { component, getByRole } = render(ChangePassword);
    await fireEvent.click(getByRole('button'));
    expect(component).toMatchSnapshot();
  });
});
