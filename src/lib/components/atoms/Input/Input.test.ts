/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Input from './Input.svelte';

describe('<Input /> component', () => {
  test('renders correctly', () => {
    let res = render(Input, {
      name: 'test',
      label: 'Test',
      value: 'Test',
      error: 'Test',
      required: true
    });

    expect(res.component).toMatchSnapshot();

    res = render(Input, {
      name: 'test',
      label: 'Test',
      value: 'Test',
      error: 'Test',
      required: true,
      labelSrOnly: true
    });
    expect(res.component).toMatchSnapshot();
  });
});
