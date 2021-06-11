import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../Navigation';

describe('NAvigation', () => {
  test('renders Navigation component', () => {
    render(<BrowserRouter><Navigation /></BrowserRouter>);
    expect(screen.getByText(/Math MAgitions Website/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Calculator/i)).toBeInTheDocument();
    expect(screen.getByText(/Quote/i)).toBeInTheDocument();
  });
});
