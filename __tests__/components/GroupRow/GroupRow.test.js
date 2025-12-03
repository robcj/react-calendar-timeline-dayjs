/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { noop } from 'test-utility';
import GroupRow from 'lib/row/GroupRow';

const defaultProps = {
  onClick: noop,
  onDoubleClick: noop,
  onContextMenu: noop,
  isEvenRow: false,
  clickTolerance: 10,
  style: {},
  group: {},
};

// using render to assert dom level props (styles, className) and user interactions
describe('GroupRow', () => {
  it('calls passed in onDoubleClick', async () => {
    const user = userEvent.setup();
    const onDoubleClickMock = jest.fn();
    const props = {
      ...defaultProps,
      onDoubleClick: onDoubleClickMock,
    };

    const { container } = render(<GroupRow {...props} />);
    const element = container.firstChild;

    await user.dblClick(element);

    expect(onDoubleClickMock).toHaveBeenCalledTimes(1);
  });

  it('calls passed in onClick', async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();
    const props = {
      ...defaultProps,
      onClick: onClickMock,
    };

    const { container } = render(<GroupRow {...props} />);
    const element = container.firstChild;

    await user.click(element);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('calls passed in onContextMenu', async () => {
    const user = userEvent.setup();
    const onContextMenuMock = jest.fn();
    const props = {
      ...defaultProps,
      onContextMenu: onContextMenuMock,
    };

    const { container } = render(<GroupRow {...props} />);
    const element = container.firstChild;

    await user.pointer({ keys: '[MouseRight]', target: element });

    expect(onContextMenuMock).toHaveBeenCalledTimes(1);
  });
  it('assigns "rct-hl-even" class if isEvenRow is true', () => {
    const props = {
      ...defaultProps,
      isEvenRow: true,
    };

    const { container } = render(<GroupRow {...props} />);
    const element = container.firstChild;

    expect(element.className.trim()).toBe('rct-hl-even');
  });
  it('assigns "rct-hl-odd" if isEvenRow is false', () => {
    const props = {
      ...defaultProps,
      isEvenRow: false,
    };

    const { container } = render(<GroupRow {...props} />);
    const element = container.firstChild;

    expect(element.className.trim()).toBe('rct-hl-odd');
  });
  it('passes style prop to style', () => {
    const props = {
      ...defaultProps,
      style: { border: '1px solid black' },
    };

    const { container } = render(<GroupRow {...props} />);
    const element = container.firstChild;

    expect(element.style.border).toBe(props.style.border);
  });
});
