import {useState} from 'react';
import {Alert} from 'react-native';
import {deleteProduct as deleteProductAPI} from '../../services/product/ProductService';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/stackParamList';

export const useDeleteProduct = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteProduct = async (productId: string) => {
    setIsDeleting(true);
    try {
      await deleteProductAPI(productId);
      Alert.alert(
        'Eliminación exitosa',
        'El producto ha sido eliminado correctamente.',
        [{text: 'OK', onPress: () => navigation.navigate('Home')}],
      );
    } catch (error) {
      Alert.alert('Error', 'Error al eliminar el producto.');
    } finally {
      setIsDeleting(false);
    }
  };

  return {deleteProduct, isDeleting};
};
