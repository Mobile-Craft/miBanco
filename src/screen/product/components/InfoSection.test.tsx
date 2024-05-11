import React from 'react';
import {render} from '@testing-library/react-native';
import {InfoSection} from './InfoSection';

describe('InfoSection', () => {
  it('renders the label and info text', () => {
    const {getByText} = render(
      <InfoSection label="Description" info="This is a test description." />,
    );
    expect(getByText('Description')).toBeTruthy();
    expect(getByText('This is a test description.')).toBeTruthy();
  });

  it('renders an image when label is Logo', () => {
    const uri = 'http://example.com/logo.png';
    const {getByTestId} = render(<InfoSection label="Logo" info={uri} />);
    const image = getByTestId('logo-image');
    expect(image.props.source).toEqual({uri});
  });
});
