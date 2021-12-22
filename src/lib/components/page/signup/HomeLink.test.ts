/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import HomeLink from './HomeLink.svelte';

describe('<HomeLink /> component', () => {
  test('renders correctly', () => {
    const { component } = render(HomeLink);
    expect(component).toMatchSnapshot();
  });
});
