/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from "@testing-library/svelte";
import Button from "./Button.svelte";
import { ButtonTypes } from "./ButtonTypes.enum"

describe("Button component", () => {
    test("redners a button", () => {
        const { container } = render(Button);
        const button = container.querySelector('button')
        expect(button.className).toEqual(ButtonTypes.Secondary);
    });
});