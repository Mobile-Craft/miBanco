import {Product} from '../services/product/ProductService';

export type RootStackParamList = {
  Home: undefined;
  DetailsProduct: {
    product: Product;
  };
  AddProduct: {
    product?: Product;
  };
};
