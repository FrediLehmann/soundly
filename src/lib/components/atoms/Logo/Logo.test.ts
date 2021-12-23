/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Logo from './Logo.svelte';

describe('<Logo /> component', () => {
  test('renders correctly', () => {
    const { component } = render(Logo);
    expect(component).toMatchSnapshot();
  });
});
