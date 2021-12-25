/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import HeaderLinkCombo from './HeaderLinkCombo.svelte';

describe('<HeaderLinkCombo /> component', () => {
  test('renders correctly', () => {
    const { component } = render(HeaderLinkCombo);
    expect(component).toMatchSnapshot();
  });
});
