import {useState} from 'react';
import {
  Product,
  addProduct,
  editProduct,
  verifyProductId,
} from '../../services/product/ProductService';
import {Alert} from 'react-native';
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList} from '../../types/stackParamList';

interface FormErrors {
  id?: string;
  name?: string;
  description?: string;
  logo?: string;
  date_release?: string;
  date_revision?: string;
}
export const useProductForm = (initialState, isEdit: boolean) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [formData, setFormData] = useState<Product>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: FormErrors = {};

    if (!formData.id || formData.id.length < 3 || formData.id.length > 10) {
      newErrors.id = 'ID no válido!';
      isValid = false;
    }

    if (
      !formData.name ||
      formData.name.length < 5 ||
      formData.name.length > 100
    ) {
      newErrors.name = 'Nombre no válido!';
      isValid = false;
    }

    if (
      !formData.description ||
      formData.description.length < 10 ||
      formData.description.length > 200
    ) {
      newErrors.description = 'Descripción no válida!';
      isValid = false;
    }

    if (!formData.logo || formData.logo.length === 0) {
      newErrors.logo = 'Logo no válido!';
      isValid = false;
    }

    if (!formData.date_release || formData.date_release.length === 0) {
      newErrors.date_release = 'Fecha no válida!';
      isValid = false;
    }

    if (!formData.date_revision || formData.date_revision.length === 0) {
      newErrors.date_revision = 'Fecha no válida!';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const exists = !isEdit && (await verifyProductId(formData.id));
      if (exists) {
        Alert.alert('Ups!', 'Este ID de producto ya existe.');
      } else {
        isEdit ? await editProduct(formData) : await addProduct(formData);
        Alert.alert(
          'Success',
          isEdit
            ? 'Producto actualizado exitosamente'
            : 'Producto agregado exitosamente',
          [
            {
              text: 'OK',
              onPress: () => navigation.dispatch(StackActions.popToTop),
            },
          ],
        );
      }
    } catch (error) {
      Alert.alert('Error', 'Error al enviar los datos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleInputChange: (field, value) => {
      setFormData({...formData, [field]: value});
    },
    handleSubmit,
    handleReset: () => {
      setFormData(initialState);
      setErrors({});
    },
  };
};
