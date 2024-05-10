import React, {FC} from 'react';
import {TextInput, Text, View, StyleSheet, TextInputProps} from 'react-native';

interface FormFieldProps extends TextInputProps {
  label: string;
  error?: string;
}

const FormField: FC<FormFieldProps> = ({label, error, ...textInputProps}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      placeholder={label}
      style={[styles.input, error ? styles.inputError : null]}
      {...textInputProps}
    />
    {error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  label: {
    paddingBottom: 9,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 14,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 6,
  },
});

export default FormField;
