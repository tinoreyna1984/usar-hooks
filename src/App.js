import React, { useState, useEffect } from "react"; // React + hooks
import logo from './logo.svg';
import './App.css';

/**
 * Ejercicios para uso de hooks
 */

function App() {

  // uso de useState
  const [stateCar, setStateCar] = useState(false);

  // uso de useEffect
  const [contar, setContar] = useState(0)
  /*useEffect(() => {
    // lo que se ejecuta
  }, [valores en array que deben actualizarse])*/
  useEffect(() => {
    console.log("clics: " + contar);
  }, [contar]);
  

  // funcion del cambio de estado
  const encenderApagar = () => {
    setStateCar(!stateCar); // el cambio de estado
    setContar(contar + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          El coche está: {stateCar ? "Encendido" : "Apagado"}.<br/>
          Número de clics: {contar} <br/>
        <button onClick={() => encenderApagar()}>Encender/Apagar</button><br/>
        </p>
      </header>
    </div>
  );
}

export default App;
