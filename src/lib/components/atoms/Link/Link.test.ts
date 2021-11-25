/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Link from './Link.svelte';
import { LinkStyles } from './LinkStyles.enum';

describe('Link component', () => {
  test('redners default Link', () => {
    const { getByRole } = render(Link, { href: '/test' });

    expect(getByRole('link')).toBeInTheDocument();
    expect(getByRole('link').className).toEqual(LinkStyles.default);
    expect(getByRole('link').getAttribute('href')).toEqual('/test');
  });

  test('redners primary Link', () => {
    const { getByRole } = render(Link, {
      href: '/test',
      style: LinkStyles.buttonPrimary
    });

    expect(getByRole('link').className).toEqual(LinkStyles.buttonPrimary);
  });

  test('redners secondary Link', () => {
    const { getByRole } = render(Link, {
      href: '/test',
      style: LinkStyles.buttonSecondary
    });

    expect(getByRole('link').className).toEqual(LinkStyles.buttonSecondary);
  });

  test('redners secondary Link', () => {
    const { getByRole } = render(Link, {
      href: '/test',
      style: LinkStyles.buttonSecondary
    });

    expect(getByRole('link').className).toEqual(LinkStyles.buttonSecondary);
  });
});
