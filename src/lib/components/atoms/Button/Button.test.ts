/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/svelte';

import Button from './Button.svelte';
import { ButtonStyles } from './ButtonStyles.enum';

describe('<Button /> component', () => {
  test('renders default button', () => {
    const { getByRole } = render(Button);
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button').dataset['type']).toEqual('secondary');
  });

  test('renders styles correct', () => {
    for (const style in ButtonStyles) {
      const rendered = render(Button, {
        btnType: style
      });

      expect(rendered.getByRole('button').dataset['type']).toEqual(style);
      rendered.unmount();
    }
  });

  test('custom class', () => {
    const { getByRole } = render(Button, { class: 'added-class' });
    expect(getByRole('button').className).toEqual(`added-class`);
  });

  test('type override', () => {
    let rendered = render(Button);
    expect(rendered.getByRole('button').getAttribute('type')).toEqual('button');
    rendered.unmount();

    rendered = render(Button, { type: 'submit' });
    expect(rendered.getByRole('button').getAttribute('type')).toEqual('submit');
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
