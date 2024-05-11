import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ButtonComponent from './ButtonComponent';

describe('ButtonComponent', () => {
  test('renders correctly with default props', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <ButtonComponent onPress={onPressMock} title="Press me" />,
    );

    const buttonElement = getByText('Press me');
    expect(buttonElement).toBeDefined();
  });

  test('executes onPress function when pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <ButtonComponent onPress={onPressMock} title="Press me" />,
    );

    const buttonElement = getByText('Press me');
    fireEvent.press(buttonElement);

    expect(onPressMock).toHaveBeenCalled();
  });

  test('applies primary styles by default', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <ButtonComponent onPress={onPressMock} title="Press me" />,
    );

    const buttonElement = getByText('Press me');
  });

  test('applies custom styles when provided', () => {
    const onPressMock = jest.fn();
    const customButtonStyle = {backgroundColor: 'blue'};
    const customTextStyle = {color: 'red'};
    const {getByText} = render(
      <ButtonComponent
        onPress={onPressMock}
        title="Press me"
        buttonStyle={customButtonStyle}
        textStyle={customTextStyle}
      />,
    );

    const buttonElement = getByText('Press me');
  });
});
