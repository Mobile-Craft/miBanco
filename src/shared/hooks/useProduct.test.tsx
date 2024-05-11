import {act, renderHook, waitFor} from '@testing-library/react-native';
import {useProducts} from './useProducts';
import {getProducts} from '../../services/product/ProductService';

// Mock de getProducts para simular una respuesta exitosa o un error
jest.mock('../../services/product/ProductService', () => ({
  getProducts: jest.fn(),
}));

describe('useProducts', () => {
  test('fetchProducts sets products and isLoading to false on successful fetch', async () => {
    const mockProducts = [
      {id: 1, name: 'Product 1'},
      {id: 2, name: 'Product 2'},
    ];

    (getProducts as jest.Mock).mockResolvedValue(mockProducts);

    const {result} = renderHook(() => useProducts());

    await act(async () => {
      result.current.refreshProducts();
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.products).toEqual(mockProducts);
  });

  test('fetchProducts sets error and isLoading to false on failed fetch', async () => {
    const mockError = new Error('Failed to fetch products');

    (getProducts as jest.Mock).mockRejectedValue(mockError);

    const {result} = renderHook(() => useProducts());

    await act(async () => {
      result.current.refreshProducts();
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toBe('Failed to fetch products');
  });
});
