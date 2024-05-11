import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import BottomSheetComponent from './BottomSheet';

describe('BottomSheetComponent', () => {
  const mockConfirm = jest.fn();
  const mockCancel = jest.fn();
  const productName = 'Test Product';

  it('renders correctly', () => {
    const {getByText} = render(
      <BottomSheetComponent
        onConfirm={mockConfirm}
        onCancel={mockCancel}
        productName={productName}
      />,
    );

    expect(getByText(/estas seguro de eliminar el producto/i)).toBeTruthy();
    expect(getByText(new RegExp(productName, 'i'))).toBeTruthy();
  });

  it('calls onConfirm when confirm button is pressed', () => {
    const {getByText} = render(
      <BottomSheetComponent
        onConfirm={mockConfirm}
        onCancel={mockCancel}
        productName={productName}
      />,
    );

    const confirmButton = getByText('Confirmar');
    fireEvent.press(confirmButton);
    expect(mockConfirm).toHaveBeenCalled();
  });

  it('calls onCancel when cancel button is pressed', () => {
    const {getByText} = render(
      <BottomSheetComponent
        onConfirm={mockConfirm}
        onCancel={mockCancel}
        productName={productName}
      />,
    );

    const cancelButton = getByText('Cancelar');
    fireEvent.press(cancelButton);
    expect(mockCancel).toHaveBeenCalled();
  });
});
