/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import BackLink from './BackLink.svelte';

describe('<BackLink /> component', () => {
  test('renders correctly', () => {
    const { component } = render(BackLink);
    expect(component).toMatchSnapshot();
  });
});
