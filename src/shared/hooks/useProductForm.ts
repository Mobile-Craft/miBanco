import {useState} from 'react';
import {Product, addProduct} from '../../services/product/ProductService';

interface FormErrors {
  id?: string;
  name?: string;
  description?: string;
  logo?: string;
  date_release?: string;
  date_revision?: string;
}
export const useProductForm = initialState => {
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

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await addProduct(formData);
        console.log('Form submitted:', formData);
      } catch (error) {
        console.log(formData);
        console.error('Failed to submit form:', error);
      }
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
