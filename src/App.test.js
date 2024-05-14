import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the correct heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Inteli - Instituto de Tecnologia e Liderança/i);
    expect(headingElement).toBeInTheDocument();
  });
})
