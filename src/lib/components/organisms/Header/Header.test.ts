/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Header from './Header.svelte';

describe('<Header /> component', () => {
  test('renders correctly', () => {
    const { component } = render(Header);
    expect(component).toMatchSnapshot();
  });
});
