import {useState} from 'react';

interface FormData {
  id: string;
  name: string;
  description: string;
  logo: string;
  releaseDate: string;
  reviewDate: string;
}

interface FormErrors {
  id?: string;
  name?: string;
  description?: string;
  logo?: string;
  releaseDate?: string;
  reviewDate?: string;
}

const useFormData = (initialState: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

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

    if (!formData.logo || formData.logo.length !== 0) {
      newErrors.logo = 'Logo no válido!';
      isValid = false;
    }

    if (!formData.releaseDate || formData.releaseDate.length !== 0) {
      newErrors.releaseDate = 'Fecha no válida!';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  const handleReset = () => {
    setFormData(initialState);
    setErrors({});
  };

  return {formData, handleInputChange, errors, validateForm, handleReset};
};

export default useFormData;
