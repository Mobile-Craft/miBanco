import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddProduct} from './AddProduct';
import {useProductForm} from '../../../shared/hooks/useProductForm';

jest.mock('../../../shared/hooks/useProductForm');

describe('AddProduct', () => {
  const Stack = createNativeStackNavigator();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useProductForm.mockReturnValue({
      formData: {
        id: '',
        name: '',
        description: '',
        logo: '',
        date_release: new Date().toISOString(), // Ensure valid date string
        date_revision: new Date().toISOString(),
      },
      handleInputChange: jest.fn(),
      handleSubmit: jest.fn(),
      handleReset: jest.fn(),
      errors: {},
    });
  });

  it('renders correctly and handles submit', () => {
    const {getByText, getByTestId} = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AddProduct"
            component={AddProduct}
            initialParams={{
              product: {
                id: '1',
                name: 'Test Product',
                description: 'A product description',
                logo: '',
                date_release: new Date().toISOString(),
                date_revision: new Date().toISOString(),
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>,
    );

    const submitButton = getByText('Enviar');
    fireEvent.press(submitButton);
    expect(useProductForm().handleSubmit).toHaveBeenCalled();

    const idInput = getByTestId('input-id');
    fireEvent.changeText(idInput, 'newId');

    const resetButton = getByText('Reiniciar');
    fireEvent.press(resetButton);
    expect(useProductForm().handleReset).toHaveBeenCalled();
  });

  it('displays validation errors', () => {
    useProductForm.mockReturnValueOnce({
      formData: {
        id: '',
        name: '',
        description: '',
        logo: '',
        date_release: new Date().toISOString(),
        date_revision: new Date().toISOString(),
      },
      handleInputChange: jest.fn(),
      handleSubmit: jest.fn(),
      handleReset: jest.fn(),
      errors: {
        id: 'ID no válido!',
      },
    });

    const {getByText} = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AddProduct" component={AddProduct} />
        </Stack.Navigator>
      </NavigationContainer>,
    );

    const errorText = getByText('ID no válido!');
    expect(errorText).toBeTruthy();
  });
});
