/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import PageFrame from './PageFrame.svelte';
import { PageFrameStyles } from './PageFrameStyles.enum';

describe('PageFrame component', () => {
  test('redners default PageFrame', () => {
    const { getByRole } = render(PageFrame);
    expect(getByRole('main')).toBeInTheDocument();
    expect(getByRole('main').className).toEqual(PageFrameStyles.default);
  });

  test('render correct styles', () => {
    for (const style in PageFrameStyles) {
      const rendered = render(PageFrame, {
        style
      });

      expect(rendered.getByRole('main').className).toEqual(style);
      rendered.unmount();
    }
  });

  test('custom class', () => {
    const { getByRole } = render(PageFrame, { class: 'added-class' });
    expect(getByRole('main').className).toEqual(
      `added-class ${PageFrameStyles.default}`
    );
  });
});
