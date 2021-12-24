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
  test('renders correctly as link', () => {
    const { component } = render(Slot, {
      props: { Component: Button, href: '#' }
    });
    expect(component).toMatchSnapshot();
  });
});
