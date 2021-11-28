/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import { ButtonStyles } from '../Button';

import Link from './Link.svelte';
import { LinkStyles } from './LinkStyles.enum';

describe('<Link /> component', () => {
  test('render default Link', () => {
    const { getByRole } = render(Link, { href: '/test' });

    expect(getByRole('link')).toBeInTheDocument();
    expect(getByRole('link').className).toEqual(LinkStyles.default);
    expect(getByRole('link').getAttribute('href')).toEqual('/test');
  });

  test('render correct styles', () => {
    for (const style in ButtonStyles) {
      const rendered = render(Link, {
        href: '/test',
        style: style
      });

      expect(rendered.getByRole('link').className).toEqual(style);
      rendered.unmount();
    }

    for (const style in LinkStyles) {
      const rendered = render(Link, {
        href: '/test',
        style: style
      });

      expect(rendered.getByRole('link').className).toEqual(style);
      rendered.unmount();
    }
  });

  test('custom class', () => {
    const { getByRole } = render(Link, { href: '/', class: 'added-class' });
    expect(getByRole('link').className).toEqual(
      `added-class ${LinkStyles.default}`
    );
  });
});
