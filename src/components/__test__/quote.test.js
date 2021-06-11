import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import Quote from '../Quote';

describe('Quote', () => {
  test('renders Quote component', () => {
    render(<Quote />);
    expect(screen.getByText('Quote of the day')).toBeInTheDocument();
  });
});
