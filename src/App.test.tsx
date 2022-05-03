import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App renderiza', () => {
  test('Muestra texto de prueba', () => {
    render(<App />);
    screen.debug();
    //expect(screen.queryByText(/Vitest/i)).toBeInTheDocument();
  });
});
