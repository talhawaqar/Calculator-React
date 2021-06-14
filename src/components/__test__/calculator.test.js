import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import Calculator from '../Calculator';

describe('calculator', () => {
  test('renders Calculator component', () => {
    const { getByRole } = render(<Calculator />);
    expect(getByRole('textbox')).toHaveDisplayValue('0');
    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.getByText('÷')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('AC')).toBeInTheDocument();
    expect(screen.getByText('+/-')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
    expect(screen.getByText('+/-')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
    expect(screen.getByText('.')).toBeInTheDocument();
  });
});
