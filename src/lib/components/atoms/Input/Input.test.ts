/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Input from './Input.svelte';

describe('<Input /> component', () => {
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

  test('renders labelSrOnly correctly', () => {
    const { getByRole, getByText } = render(Input, {
      name: 'test',
      label: 'Test',
      value: 'Test',
      labelSrOnly: true
    });

    expect(getByText('Test').className.includes('sr-only')).toBeTruthy();
    expect(getByRole('textbox').className.includes('col-span-3')).toBeTruthy();
  });
});
