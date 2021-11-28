/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import { ButtonStyles } from '$lib/components/atoms';

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
      style: ButtonStyles.Primary
    });

    expect(getByRole('link').className).toEqual(ButtonStyles.Primary);
  });

  test('redners secondary Link', () => {
    const { getByRole } = render(Link, {
      href: '/test',
      style: ButtonStyles.Primary
    });

    expect(getByRole('link').className).toEqual(ButtonStyles.Secondary);
  });

  test('redners secondary Link', () => {
    const { getByRole } = render(Link, {
      href: '/test',
      style: ButtonStyles.Secondary
    });

    expect(getByRole('link').className).toEqual(ButtonStyles.Secondary);
  });
});
