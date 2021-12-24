/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import SearchField from './SearchField.svelte';

describe('<SearchField /> component', () => {
  test('renders correctly', () => {
    const { component } = render(SearchField);
    expect(component).toMatchSnapshot();
  });
});
