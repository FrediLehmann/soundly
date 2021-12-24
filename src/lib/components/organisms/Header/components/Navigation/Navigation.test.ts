/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Navigation from './Navigation.svelte';

describe('<Navigation /> component', () => {
  test('renders correctly', () => {
    const { component } = render(Navigation);
    expect(component).toMatchSnapshot();
  });
});
