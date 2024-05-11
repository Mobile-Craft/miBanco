import {useState, useCallback} from 'react';
import {Product, getProducts} from '../../services/product/ProductService';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProducts = useCallback(async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to fetch products');
      setIsLoading(false);
    }
  }, []);

  const refreshProducts = () => {
    fetchProducts();
  };

  return {products, error, isLoading, refreshProducts};
};
