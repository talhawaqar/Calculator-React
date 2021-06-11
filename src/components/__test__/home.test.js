import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '../Home';

describe('Home', () => {
  test('renders Home component', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our Page!')).toBeInTheDocument();
  });
});
