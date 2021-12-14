/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import { fireEvent } from '@testing-library/svelte/node_modules/@testing-library/dom';

import Component from './__test__/Component.svelte';

describe('<Flyin /> component', () => {
  test('component not in DOM on default', async () => {
    const { component, getByRole } = render(Component);
    await fireEvent.click(getByRole('button'));
    expect(component).toMatchSnapshot();
  });
});
