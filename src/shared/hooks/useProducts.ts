import {useState, useCallback} from 'react';
import {Product, getProducts} from '../../services/product/ProductService';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError('Failed to fetch products');
      console.error(err);
    }
  }, []);

  const refreshProducts = () => {
    fetchProducts();
  };

  return {products, error, refreshProducts};
};
