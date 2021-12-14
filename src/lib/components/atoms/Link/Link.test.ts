/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Link from './Link.svelte';

describe('<Link /> component', () => {
  test('render Link', () => {
    const { component } = render(Link, { href: '/test' });
    expect(component).toMatchSnapshot();
  });
});
