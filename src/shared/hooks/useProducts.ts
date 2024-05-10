import {useState, useEffect} from 'react';
import {Product, getProducts} from '../../services/product/ProductService';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products');
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  return {products, error};
};
