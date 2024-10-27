import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('verifica que el botón se renderiza con el texto inicial', () => {
  render(<App />);
  const botonElement = screen.getByText("Hacer clic aquí");
  expect(botonElement).toBeInTheDocument();
});