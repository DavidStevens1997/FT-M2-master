import React from 'react';


const Timer = () => {

  const [segundos, setSegundos] = React.useState(0);
  const [activo, setActivo] = React.useState(false);
  const [tipo, setTipo] = React.useState('Contador');

  return (
    <div className="app">
      <div className="time">
        {segundos}
      </div>
      <div className="row">
        <button className="button-primary">
          Inicio
        </button>
        <button className="button-secondary">
          Reset
        </button>
      </div>
      <button className="button">
          Contador
      </button>
      <input type="number" placeholder="Ingresa Segundos" autoComplete="off"/>
    </div>
  );
};

export default Timer;
