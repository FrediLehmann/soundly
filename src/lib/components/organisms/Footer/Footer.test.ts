/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Footer from './Footer.svelte';

describe('<Footer /> component', () => {
  test('renders correctly', () => {
    const { component } = render(Footer);
    expect(component).toMatchSnapshot();
  });
});
