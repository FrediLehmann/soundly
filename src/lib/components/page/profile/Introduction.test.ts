/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Introduction from './Introduction.svelte';

describe('<Introduction /> component', () => {
  test('renders correctly', () => {
    const { component } = render(Introduction);
    expect(component).toMatchSnapshot();
  });
});
