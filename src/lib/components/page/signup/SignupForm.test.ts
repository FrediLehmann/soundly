/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import SignupForm from './SignupForm.svelte';

describe('<SignupForm /> component', () => {
  test('renders correctly', () => {
    const { component } = render(SignupForm, {
      props: { signup: (_: unknown) => _, submitting: false }
    });
    expect(component).toMatchSnapshot();
  });
});
