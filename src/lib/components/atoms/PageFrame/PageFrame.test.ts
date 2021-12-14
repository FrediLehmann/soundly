/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import PageFrame from './PageFrame.svelte';

describe('<PageFrame /> component', () => {
  test('redners PageFrame', () => {
    const { component } = render(PageFrame);
    expect(component).toMatchSnapshot();
  });
});
