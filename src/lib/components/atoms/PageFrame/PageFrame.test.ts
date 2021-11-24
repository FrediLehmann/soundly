/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import PageFrame from './PageFrame.svelte';
import { PageFrameTypes } from './PageFrameTypes.enum'

describe('PageFrame component', () => {
    test('redners default PageFrame', () => {
        const { getByRole } = render(PageFrame);
        expect(getByRole('main')).toBeInTheDocument()
        expect(getByRole('main').className).toEqual(PageFrameTypes.default);
    });

    test('redners small PageFrame', () => {
        const { getByRole } = render(PageFrame, { type: PageFrameTypes.small });
        expect(getByRole('main').className).toEqual(PageFrameTypes.small);
    });
});