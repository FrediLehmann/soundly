/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import AccountSection from './AccountSection.svelte';

describe('<AccountSection /> component', () => {
  test('renders correctly', () => {
    const { component } = render(AccountSection);
    expect(component).toMatchSnapshot();
  });
});
