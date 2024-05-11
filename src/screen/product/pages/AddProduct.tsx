import React, {FC, useEffect} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import ButtonComponent from '../../../shared/components/button/ButtonComponent';
import FormField from '../components/FormField';
import {useProductForm} from '../../../shared/hooks/useProductForm';
import RNDateTimePicker, {
  DateTimePickerEvent,
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import {addYears, format} from 'date-fns';
import {RootStackScreenProps} from '../../../types/stackScreenProps';

export const AddProduct: FC<RootStackScreenProps<'AddProduct'>> = ({route}) => {
  const productToEdit = route.params?.product;
  const isEdit = Boolean(productToEdit);
  const initialState = productToEdit || {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: new Date().toISOString(),
    date_revision: addYears(new Date().toISOString(), 1),
  };
  const {formData, handleInputChange, handleSubmit, errors, handleReset} =
    useProductForm(initialState, isEdit);

  useEffect(() => {
    const nextYearDate = addYears(
      new Date(formData.date_release),
      1,
    ).toISOString();
    handleInputChange('date_revision', nextYearDate);
  }, [formData.date_release]);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || new Date(formData.date_release);
    handleInputChange('date_release', currentDate.toISOString());
  };

  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      value: new Date(formData.date_release),
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
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
          style={[productToEdit && [styles.inputBlock]]}
          value={formData.id}
          onChangeText={text => handleInputChange('id', text)}
          error={errors.id}
          editable={!productToEdit}
        />

        <FormField
          label="Nombre"
          autoCapitalize="sentences"
          value={formData.name}
          onChangeText={text => handleInputChange('name', text)}
          error={errors.name}
        />

        <FormField
          label="Descripción"
          autoCapitalize="sentences"
          value={formData.description}
          onChangeText={text => handleInputChange('description', text)}
          error={errors.description}
        />

        <FormField
          testID="input-id"
          label="Logo"
          value={formData.logo}
          onChangeText={text => handleInputChange('logo', text)}
          error={errors.logo}
        />
        {Platform.OS === 'ios' ? (
          <RNDateTimePicker
            value={new Date(formData.date_release)}
            onChange={onChange}
            minimumDate={new Date()}
          />
        ) : (
          <TouchableOpacity onPress={showDatepicker} style={styles.takeDate}>
            <Text>
              Fecha {format(new Date(formData.date_release), 'dd/MM/yyy')}
            </Text>
          </TouchableOpacity>
        )}

        <FormField
          editable={false}
          label="Fecha Liberación"
          value={format(new Date(formData.date_release), 'dd/MM/yyyy')}
          onChangeText={text => handleInputChange('date_release', text)}
          error={errors.date_release}
        />

        <FormField
          editable={false}
          style={styles.inputBlock}
          label="Fecha Revisión"
          value={format(new Date(formData.date_revision), 'dd/MM/yyyy')}
          onChangeText={text => handleInputChange('date_revision', text)}
          error={errors.date_revision}
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
  buttonContainer: {
    top: 24,
    marginBottom: 120,
  },
  inputBlock: {
    backgroundColor: '#f6f6f6',
  },
  takeDate: {
    padding: 10,
    backgroundColor: '#e0e0d6',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 8,
  },
});
