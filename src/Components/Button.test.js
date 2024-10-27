import React from 'react';
import { render,screen,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('verifica que el botón muestra el texto inicial y cambia después de hacer clic', () => {
  render(<Button />);

  const botonElement = screen.getByText("Hacer clic aquí");
  expect(botonElement).toBeInTheDocument();

  fireEvent.click(botonElement);

  const textoCambiado = screen.getByText("¡Gracias por hacer clic!");
  expect(textoCambiado).toBeInTheDocument();
});