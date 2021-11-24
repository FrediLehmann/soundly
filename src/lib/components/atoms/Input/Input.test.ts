/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Input from './Input.svelte';

describe('Input component', () => {
  test('renders default Input', () => {
    const { getByRole, getByText } = render(Input, {
      name: 'test',
      label: 'Test',
      value: 'Test'
    });

    expect(getByText('Test')).toBeInTheDocument();
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  test('renders required', () => {
    const { getByText } = render(Input, {
      name: 'test',
      label: 'Test',
      value: 'Test',
      required: true
    });

    expect(getByText('*')).toBeInTheDocument();
  });

  test('renders error', () => {
    const { getByText } = render(Input, {
      name: 'test',
      label: 'Test',
      value: 'Test',
      error: 'Error'
    });

    expect(getByText('Error')).toBeInTheDocument();
  });
});
