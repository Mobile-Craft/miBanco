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
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const addProduct = async (productData: Product): Promise<void> => {
  try {
    await axios.post(BASE_URL, productData, {
      headers: {authorId: '2010'},
    });
    console.log('Product added successfully');
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};
