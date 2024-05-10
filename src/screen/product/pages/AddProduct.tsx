import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ButtonComponent from '../../../shared/components/button/ButtonComponent';
import useFormData from '../../../shared/hooks/useFormData';
import FormField from '../components/FormField';

export const AddProduct = () => {
  const initialState = {
    id: '',
    name: '',
    description: '',
    logo: '',
    releaseDate: '',
    reviewDate: '',
  };
  const {formData, handleInputChange, errors, validateForm, handleReset} =
    useFormData(initialState);

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form data submitted', formData);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 80}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Formulario de Registro</Text>

        <FormField
          label="ID"
          value={formData.id}
          onChangeText={text => handleInputChange('id', text)}
          error={errors.id}
        />

        <FormField
          label="Nombre"
          value={formData.name}
          onChangeText={text => handleInputChange('name', text)}
          error={errors.name}
        />

        <FormField
          label="Descripción"
          value={formData.description}
          onChangeText={text => handleInputChange('description', text)}
          error={errors.description}
        />

        <FormField
          label="Logo"
          value={formData.logo}
          onChangeText={text => handleInputChange('logo', text)}
          error={errors.logo}
        />

        <FormField
          label="Fecha Liberación"
          value={formData.releaseDate}
          onChangeText={text => handleInputChange('releaseDate', text)}
          error={errors.releaseDate}
        />

        <FormField
          editable={false}
          style={[styles.input, {backgroundColor: '#f6f6f6'}]}
          label="Fecha Revisión"
          value={formData.reviewDate}
          onChangeText={text => handleInputChange('reviewDate', text)}
          error={errors.reviewDate}
        />

        <View style={styles.buttonContainer}>
          <ButtonComponent
            onPress={handleSubmit}
            title="Enviar"
            styleType="primary"
          />
          <ButtonComponent
            containerStyle={{top: 12}}
            onPress={handleReset}
            title="Reiniciar"
            styleType="secondary"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 14,
    marginBottom: 10,
  },
  buttonContainer: {
    top: 24,
    marginBottom: 120,
  },
});
