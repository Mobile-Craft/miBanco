import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useProductForm} from './useProductForm'; // Adjust the import path as necessary
import {Button, Text, TextInput} from 'react-native';

const TestComponent = ({initialState, isEdit}) => {
  const {formData, handleInputChange, handleSubmit, errors} = useProductForm(
    initialState,
    isEdit,
  );
  return (
    <React.Fragment>
      <TextInput
        testID="input-id"
        onChangeText={text => handleInputChange('id', text)}
        value={formData.id}
      />
      <TextInput
        testID="input-name"
        onChangeText={text => handleInputChange('name', text)}
        value={formData.name}
      />
      {errors.id && <Text testID="error-id"> {errors.id}</Text>}
      <Button testID="button-submit" title="Submit" onPress={handleSubmit} />
    </React.Fragment>
  );
};

describe('useProductForm', () => {
  it('validates and submits the form correctly', async () => {
    const initialState = {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    };

    const {getByTestId, findByText} = render(
      <NavigationContainer>
        <TestComponent initialState={initialState} isEdit={false} />
      </NavigationContainer>,
    );

    fireEvent.changeText(getByTestId('input-id'), '123');
    fireEvent.changeText(getByTestId('input-name'), 'Test Product');

    await act(async () => {
      fireEvent.press(getByTestId('button-submit'));
    });
  });
});
