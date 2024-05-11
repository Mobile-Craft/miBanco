import axios from 'axios';
import {
  getProducts,
  verifyProductId,
  addProduct,
  deleteProduct,
  editProduct,
} from './ProductService';

jest.mock('axios');

describe('ProductService', () => {
  describe('getProducts', () => {
    it('fetches products successfully', async () => {
      const products = [{id: '1', name: 'Product 1'}];
      axios.get.mockResolvedValue({data: products});
      const result = await getProducts();
      expect(result).toEqual(products);
      expect(axios.get).toHaveBeenCalledWith(
        'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products',
        {headers: {authorId: '2010'}},
      );
    });

    it('handles fetch error', async () => {
      const error = new Error('Error fetching');
      axios.get.mockRejectedValue(error);
      await expect(getProducts()).rejects.toThrow('Error fetching');
    });
  });

  describe('verifyProductId', () => {
    it('verifies product ID successfully', async () => {
      axios.get.mockResolvedValue({data: true});
      const result = await verifyProductId('1');
      expect(result).toBe(true);
      expect(axios.get).toHaveBeenCalledWith(
        'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/verification?id=1',
        {headers: {authorId: '2010'}},
      );
    });

    it('handles verification error', async () => {
      const error = new Error('Verification failed');
      axios.get.mockRejectedValue(error);
      await expect(verifyProductId('1')).rejects.toThrow('Verification failed');
    });
  });

  describe('addProduct', () => {
    const newProduct = {
      id: '2',
      name: 'Product 2',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    };

    it('adds a product successfully', async () => {
      axios.post.mockResolvedValue();
      await addProduct(newProduct);
      expect(axios.post).toHaveBeenCalledWith(
        'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products',
        newProduct,
        {headers: {authorId: '2010'}},
      );
    });

    it('handles add product error', async () => {
      const error = new Error('Add failed');
      axios.post.mockRejectedValue(error);
      await expect(addProduct(newProduct)).rejects.toThrow('Add failed');
    });
  });

  describe('editProduct', () => {
    const productToUpdate = {
      id: '1',
      name: 'Updated Product',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    };

    it('updates a product successfully', async () => {
      axios.put.mockResolvedValue();
      await editProduct(productToUpdate);
      expect(axios.put).toHaveBeenCalledWith(
        'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products',
        productToUpdate,
        {headers: {authorId: '2010'}},
      );
    });

    it('handles update error', async () => {
      const error = new Error('Update failed');
      axios.put.mockRejectedValue(error);
      await expect(editProduct(productToUpdate)).rejects.toThrow(
        'Update failed',
      );
    });
  });
});
