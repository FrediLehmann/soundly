/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Flyin from './Flyin.svelte';

describe('<Flyin /> component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('component not in DOM on default', () => {
    const { container } = render(Flyin);
    expect(container.innerHTML).toEqual('<div></div>');
  });

  //// Tests currently not updating state correctly

  //   test('component visible on show', async () => {
  //     const { container, component, getByText, getByRole } = render(Flyin);
  //     await act(() =>
  //       component.show({
  //         message: 'Test Show',
  //         timeout: 20,
  //         style: FlyinStyles.info
  //       })
  //     );
  //     expect(getByText('Test Show')).toBeInTheDocument();

  //     await fireEvent.click(getByRole('button'));
  //     expect(container.innerHTML).toEqual('<div></div>');
  //   });

  //   test('hdes after timeout', async () => {
  //     const { container, component, getByText } = render(Flyin);
  //     await act(() =>
  //       component.show({
  //         message: 'Test Show',
  //         timeout: 1,
  //         style: FlyinStyles.info
  //       })
  //     );

  //     expect(getByText('Test Show')).toBeInTheDocument();

  //     await jest.advanceTimersByTime(2);
  //     expect(container.innerHTML).toEqual('<div></div>');
  //   });
});
