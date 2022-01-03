/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/svelte';

import DeleteAccount from './DeleteAccount.svelte';

describe('<DeleteAccount /> component', () => {
  test('renders correctly', () => {
    const { component } = render(DeleteAccount);
    expect(component).toMatchSnapshot();
  });

  test('renders edit mode correctly', async () => {
    const { component, getByRole } = render(DeleteAccount);
    await fireEvent.click(getByRole('button'));
    expect(component).toMatchSnapshot();
  });
});
