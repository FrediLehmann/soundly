/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import ChangeUsername from './ChangeUsername.svelte';

describe('<ChangeUsername /> component', () => {
  test('renders correctly', () => {
    const { component } = render(ChangeUsername);
    expect(component).toMatchSnapshot();
  });
});
