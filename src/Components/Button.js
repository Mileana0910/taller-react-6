import React, { useState } from 'react';

const Button = () => {
  const [texto, setTexto] = useState("Hacer clic aquí");

  const manejarClic = () => {
    setTexto("¡Gracias por hacer clic!");
  };

  return (
    <button onClick={manejarClic}>{texto}</button>
  );
};

export default Button;