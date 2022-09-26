import React from 'react';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return(
    <>
      <button onClick={onClose}>X</button>
      <h3>{name}</h3>
      <div>
        <h3>Min</h3>
        <p>{min}</p>
        <h3>Max</h3>
        <p>{max}</p>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={"img"}/>
      </div>
      <div></div>
    </>
  )
  
  
};