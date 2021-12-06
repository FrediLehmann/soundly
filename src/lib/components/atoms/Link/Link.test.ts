/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Link from './Link.svelte';
import { LinkStyles } from './LinkStyles.enum';

describe('<Link /> component', () => {
  test('render default Link', () => {
    const { getByRole } = render(Link, { href: '/test' });

    expect(getByRole('link')).toBeInTheDocument();
    expect(getByRole('link').dataset['type']).toEqual(LinkStyles.default);
    expect(getByRole('link').getAttribute('href')).toEqual('/test');
  });

  test('render correct styles', () => {
    for (const style in LinkStyles) {
      const rendered = render(Link, {
        href: '/test',
        style: style
      });

      expect(rendered.getByRole('link').dataset['type']).toEqual(style);
      rendered.unmount();
    }
  });

  test('custom class', () => {
    const { getByRole } = render(Link, { href: '/', class: 'added-class' });
    expect(getByRole('link').className).toEqual(`added-class link`);
  });
});
