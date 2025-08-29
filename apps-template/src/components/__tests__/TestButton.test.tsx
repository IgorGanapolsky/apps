import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TestButton } from '../TestButton';

describe('TestButton', () => {
  it('renders correctly', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <TestButton onPress={onPress} title="Test Button" />
    );
    
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <TestButton onPress={onPress} title="Test Button" />
    );
    
    fireEvent.press(getByText('Test Button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
