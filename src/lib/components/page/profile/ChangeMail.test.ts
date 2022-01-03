/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/svelte';

import ChangeMail from './ChangeMail.svelte';

describe('<ChangeMail /> component', () => {
  test('renders correctly', () => {
    const { component } = render(ChangeMail);
    expect(component).toMatchSnapshot();
  });

  test('renders edit mode correctly', async () => {
    const { component, getByText } = render(ChangeMail);
    await fireEvent.click(getByText('Change Email'));
    expect(component).toMatchSnapshot();
  });
});
