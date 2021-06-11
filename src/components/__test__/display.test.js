import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';

import Display from '../Display';

describe('Display', () => {
  test('renders Display component with default props', () => {
    const { getByRole } = render(<Display />);
    expect(getByRole('textbox')).toHaveDisplayValue('0');
  });

  test('renders Display component with props', () => {
    const { getByRole } = render(<Display result="6" />);
    expect(getByRole('textbox')).toHaveDisplayValue('6');
  });
});
