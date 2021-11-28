/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/svelte';

import Button from './Button.svelte';
import { ButtonStyles } from './ButtonStyles.enum';

describe('Button component', () => {
  test('redners default button', () => {
    const { getByRole } = render(Button);
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button').className).toEqual(ButtonStyles.Secondary);
  });

  test('renders primary button', () => {
    const { getByRole } = render(Button, { btnType: ButtonStyles.Primary });
    expect(getByRole('button').className).toEqual(ButtonStyles.Primary);
  });

  test('renders ghost button', () => {
    const { getByRole } = render(Button, { btnType: ButtonStyles.Ghost });
    expect(getByRole('button').className).toEqual(ButtonStyles.Ghost);
  });

  test('custom class', () => {
    const { getByRole } = render(Button, { class: 'added-class' });
    expect(getByRole('button').className).toEqual(
      `added-class ${ButtonStyles.Secondary}`
    );
  });

  test('click', async () => {
    const onClick = jest.fn();
    const { component, container } = render(Button);

    component.$on('click', onClick);

    const button = container.querySelector('button');
    fireEvent.click(button as HTMLElement);

    expect(onClick.mock.calls.length).toEqual(1);
  });
});
