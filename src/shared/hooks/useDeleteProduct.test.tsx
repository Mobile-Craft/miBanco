import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsProductScreen} from '../../screen/product/pages/DetailsProductScreen';

jest.mock('./useDeleteProduct', () => ({
  useDeleteProduct: () => ({
    deleteProduct: jest.fn(),
  }),
}));

const Stack = createNativeStackNavigator();

describe('DetailsProductScreen', () => {
  it('renders correctly and handles delete', async () => {
    const mockNavigate = jest.fn();
    const mockGoBack = jest.fn();
    const route = {
      params: {
        product: {
          id: '1',
          name: 'Product 1',
          description: 'Description',
          logo: 'logo_url',
          date_release: '2022-01-01',
          date_revision: '2023-01-01',
        },
      },
    };

    const {getByText, getByTestId} = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DetailsProduct">
            {() => (
              <DetailsProductScreen
                navigation={{navigate: mockNavigate, goBack: mockGoBack}}
                route={route}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>,
    );
  });
});
