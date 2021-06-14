import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Calculator/i)).toBeInTheDocument();
    expect(screen.getByText(/Quote/i)).toBeInTheDocument();
  });
});
