import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render } from '@testing-library/react-native';
import { ElementsText } from '../ElementsText';

describe('ElementsText', () => {
  it('should render body text component', () => {
    const { getByText } = render(<ElementsText>Text</ElementsText>);

    const textView = getByText('Text');
    expect(textView).toHaveStyle({ fontSize: 16 });
  });

  it('should render header text component', () => {
    const { getByText } = render(
      <ElementsText type="header">Text</ElementsText>,
    );

    const textView = getByText('Text');
    expect(textView).toHaveStyle({ fontSize: 32 });
  });

  it('should render subHeader text component', () => {
    const { getByText } = render(
      <ElementsText type="subHeader">Text</ElementsText>,
    );

    const textView = getByText('Text');
    expect(textView).toHaveStyle({ fontSize: 24 });
  });

  it('should render red text', () => {
    const { getByText } = render(
      <ElementsText type="subHeader" color="red">
        Text
      </ElementsText>,
    );

    const textView = getByText('Text');
    expect(textView).toHaveStyle({ color: 'red' });
  });

  it('should render bold text', () => {
    const { getByText } = render(<ElementsText bold>Text</ElementsText>);

    const textView = getByText('Text');
    expect(textView).toHaveStyle({ fontWeight: 'bold' });
  });
});
