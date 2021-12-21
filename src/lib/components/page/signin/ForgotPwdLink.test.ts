/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import ForgotPwdLink from './ForgotPwdLink.svelte';

describe('<ForgotPwdLink /> component', () => {
  test('renders correctly', () => {
    const { component } = render(ForgotPwdLink);
    expect(component).toMatchSnapshot();
  });
});
