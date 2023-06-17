import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render } from '@testing-library/react-native';
import { Separator } from '../Separator';

describe('Separator', () => {
  it('should render component with proper styles', () => {
    const { getByTestId } = render(<Separator width={20} height={30} />);

    expect(getByTestId('separator')).toHaveStyle({ width: 20, height: 30 });
  });
});
