import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Item from './Item';

describe('Item Component', () => {
  it('renders the name and ID passed to it', () => {
    const mockPress = jest.fn();
    const {getByText} = render(
      <Item name="Sample Item" id="123" onPress={mockPress} />,
    );

    expect(getByText('Sample Item')).toBeTruthy();
    expect(getByText('ID: 123')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockPress = jest.fn();
    const {getByTestId} = render(
      <Item name="Sample Item" id="123" onPress={mockPress} />,
    );

    const touchable = getByTestId('item-touchable');
    fireEvent.press(touchable);
    expect(mockPress).toHaveBeenCalled();
  });
});
