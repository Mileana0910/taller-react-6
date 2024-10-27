//EJERCICIO 1 (Enrutado)
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styles from "./Styles/Enrutado.module.css"

function Inicio() {
  return <div className={styles.Background}><h1>Hola, Bienvenido al inicio!!!</h1></div>;
}

function Sobre() {
  return <div className={styles.Background}><h1>Acerca de nosotros</h1></div>;
}

function App() {
  return (
    <Router>
      <div className={styles.navbar}>
        <Link to="/inicio" className={styles.navButton}>INICIO</Link>
        <Link to="/sobre" className={styles.navButton}>NOSOTROS</Link>
      </div>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}
export default App;

//EJERCICIO 2 (Hooks)
// import React, { useState, useEffect } from 'react';
// import styles from "./Styles/Hooks.module.css"

// function Contador() {
//   const [contador, setContador] = useState(0);

//   useEffect(() => {
//     console.log(`El contador ha cambiado a: ${contador}`);
//   }, [contador]);

//   return (
//     <div className={styles.container}>
//       <div className={styles.counterBox}>
//       <h1>Contador: {contador}</h1>
//       <button onClick={() => setContador(contador + 1)}>INCREMENTAR</button>
//       <button onClick={() => setContador(contador - 1)}>DECREMENTAR</button>
//       </div>
//     </div>
//   );
// }
// export default Contador;

//EJERCICIO 3 (Gestión de Estado Global con Context)
// import React from "react";
// import { ThemeProvider, useTheme } from "./Components/ThemeContext.js";
// import styles from "./Styles/Context.module.css";

// const ThemeToggleButton = () => {
//   const { toggleTheme } = useTheme();
//   return (
//     <button className={styles.button} onClick={toggleTheme}>
//       CAMBIAR TEMA
//     </button>
//   );
// };

// const ThemedText = () => {
//   const { theme } = useTheme();
//   return (
//     <h1
//       className={theme === "light" ? styles["text-light"] : styles["text-dark"]}
//     >
//       Modo {theme}
//     </h1>
//   );
// };

// function App() {
//   return (
//     <ThemeProvider>
//       <MainContent />
//     </ThemeProvider>
//   );
// }

// const MainContent = () => {
//   const { theme } = useTheme();
//   return (
//     <div
//       className={`${styles.App} ${
//         theme === "dark" ? styles.dark : styles.light
//       }`}
//     >
//       <ThemedText />
//       <ThemeToggleButton />
//     </div>
//   );
// };
// export default App;

//EJERCICIO 4(Redux)
// import React from "react";
// import { CounterApp } from "./Components/Counter.js";

// function App() {
//   return (
//     <div className="App">
//       <CounterApp />
//     </div>
//   );
// }
// export default App;

//EJERCICIO 5 (Pruebas con Jest y React Testing Library)
//Hacer test
// import React from 'react';
// import Boton from './Components/Button';

// function App() {
//   return (
//     <div>
//       <Boton />
//     </div>
//   );
// }
// export default App;