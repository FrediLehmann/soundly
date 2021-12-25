/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import HeaderLinkCombo from './HeaderLinkCombo.svelte';
import Slot from './__test__/Slot.svelte';

describe('<HeaderLinkCombo /> component', () => {
  test('renders correctly', () => {
    const { component } = render(Slot, {
      props: {
        Component: HeaderLinkCombo,
        href: '/test',
        HeadingText: 'Test Heading',
        LinkText: 'Link Text'
      }
    });
    expect(component).toMatchSnapshot();
  });
});
