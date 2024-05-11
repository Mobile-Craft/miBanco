import axios from 'axios';

const BASE_URL =
  'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products';

export interface Product {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(BASE_URL, {
      headers: {
        authorId: '2010',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyProductId = async (productId: string): Promise<boolean> => {
  try {
    const url = `${BASE_URL}/verification?id=${productId}`;
    const response = await axios.get(url, {headers: {authorId: '2010'}});
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addProduct = async (productData: Product): Promise<void> => {
  try {
    await axios.post(BASE_URL, productData, {headers: {authorId: '2010'}});
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productId: string) => {
  const url = `${BASE_URL}?id=${productId}`;
  try {
    await axios.delete(url, {
      headers: {
        authorId: '2010',
      },
    });
    console.log('Product deleted successfully');
  } catch (error) {}
};

export const editProduct = async (productData: Product): Promise<void> => {
  try {
    await axios.put(BASE_URL, productData, {headers: {authorId: '2010'}});
  } catch (error) {
    throw error;
  }
};
