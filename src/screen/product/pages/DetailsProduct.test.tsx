import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsProductScreen} from './DetailsProductScreen';
import {useDeleteProduct} from '../../../shared/hooks/useDeleteProduct';

jest.mock('../../../shared/hooks/useDeleteProduct', () => ({
  useDeleteProduct: () => ({
    deleteProduct: jest.fn(),
  }),
}));

jest.mock('@gorhom/bottom-sheet', () => ({
  BottomSheetBackdrop: ({children}) => <>{children}</>,
  BottomSheetView: ({children}) => <>{children}</>,
}));

const Stack = createNativeStackNavigator();

describe('DetailsProductScreen', () => {
  const mockNavigate = jest.fn();
  const mockGoBack = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly and handles delete', async () => {
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

    const {getByText} = render(
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
