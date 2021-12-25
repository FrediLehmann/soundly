/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import LogoLetter from './LogoLetter.svelte';

describe('<LogoLetter /> component', () => {
  test('renders correctly', () => {
    const { component } = render(LogoLetter);
    expect(component).toMatchSnapshot();
  });
});
