/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Button from './Button.svelte';
import Slot from './__test__/Slot.svelte';

describe('<Button /> component', () => {
  test('renders correctly', () => {
    const { component } = render(Slot, { props: { Component: Button } });
    expect(component).toMatchSnapshot();
  });

  test('renders type correctly', () => {
    const { getByRole } = render(Button, { type: 'submit' });
    expect(getByRole('button').getAttribute('type')).toEqual('submit');
  });

  test('renders style correctly', () => {
    const { getByRole } = render(Button, { style: 'ghost' });
    expect(getByRole('button').getAttribute('data-type')).toEqual('ghost');
  });
});
