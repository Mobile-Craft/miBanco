import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './HomeScreen';
import {useProducts} from '../../shared/hooks/useProducts';
import {RootStackParamList} from '../../types/stackParamList';

jest.mock('../../shared/hooks/useProducts');

describe('HomeScreen', () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useProducts.mockReturnValue({
      products: [{id: '1', name: 'Product 1'}],
      refreshProducts: jest.fn(),
      isLoading: false,
      error: null,
    });
  });

  it('renders correctly and navigates on item press', () => {
    const navigationMock: any = {
      navigate: mockNavigate,
      addListener: jest.fn(() => jest.fn()),
    };
    const {getByText} = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} navigation={navigationMock} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>,
    );
    // Simulate pressing an item
    const item = getByText('Product 1');
    fireEvent.press(item);
    expect(mockNavigate).toHaveBeenCalledWith('DetailsProduct', {
      product: {id: '1', name: 'Product 1'},
    });
    // Test the 'Agregar' button navigation
    const addButton = getByText('Agregar');
    fireEvent.press(addButton);
    expect(mockNavigate).toHaveBeenCalledWith('AddProduct', {});
  });
});
