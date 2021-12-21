/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import SigninForm from './SigninForm.svelte';

describe('<SigninForm /> component', () => {
  test('renders correctly', () => {
    const { component } = render(SigninForm, {
      props: { signin: (_: unknown) => _, submitting: false }
    });
    expect(component).toMatchSnapshot();
  });
});
