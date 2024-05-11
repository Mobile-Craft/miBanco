import React from 'react';
import {render} from '@testing-library/react-native';
import FormField from './FormField';

describe('FormField Component', () => {
  it('renders correctly with no error', () => {
    const {getByPlaceholderText, queryByText} = render(
      <FormField label="Username" />,
    );

    const input = getByPlaceholderText('Username');
    expect(input).toBeTruthy();
    expect(queryByText(/error/i)).toBeNull();
  });

  it('displays an error message when an error is passed', () => {
    const errorMessage = 'Required field';
    const {getByText, getByPlaceholderText} = render(
      <FormField label="Email" error={errorMessage} />,
    );

    const input = getByPlaceholderText('Email');
    expect(input).toBeTruthy();
    expect(getByText(errorMessage)).toBeTruthy();
  });

  it('applies custom styles when passed', () => {
    const customStyle = {borderColor: 'blue'};
    const {getByPlaceholderText} = render(
      <FormField label="Password" style={customStyle} />,
    );

    const input = getByPlaceholderText('Password');
    // Find the style object within the array that matches the custom style
    expect(
      input.props.style.find(style => style?.borderColor === 'blue'),
    ).toBeTruthy();
  });
});
