/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import ForgotPwdForm from './ForgotPwdForm.svelte';

describe('<ForgotPwdForm /> component', () => {
  test('renders correctly', () => {
    const { component } = render(ForgotPwdForm, {
      props: { resetPassword: (_: unknown) => _, submitting: false }
    });
    expect(component).toMatchSnapshot();
  });
});
