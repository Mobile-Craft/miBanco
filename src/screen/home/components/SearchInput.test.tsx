import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchInput from './SearchInput';

describe('SearchInput Component', () => {
  it('renders correctly with initial value', () => {
    const initialValue = 'example';
    const mockOnChange = jest.fn();
    const {getByPlaceholderText} = render(
      <SearchInput onChange={mockOnChange} value={initialValue} />,
    );

    const input = getByPlaceholderText('Search...');
    expect(input.props.value).toBe(initialValue);
  });

  it('should handle text changes', () => {
    const mockOnChange = jest.fn();
    const {getByPlaceholderText} = render(
      <SearchInput onChange={mockOnChange} value="" />,
    );

    const input = getByPlaceholderText('Search...');
    fireEvent.changeText(input, 'new text');

    expect(mockOnChange).toHaveBeenCalledWith('new text');
  });
});
