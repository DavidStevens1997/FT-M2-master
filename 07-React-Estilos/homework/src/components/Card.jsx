import React from 'react';
import style from '../styles/Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return(
    <div className={style.card}>
      <button className={style.btn} onClick={onClose}>X</button>
      <h2>{name}</h2>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={"img"}/>
      <div>
        <p>Min {min}</p>
        <p>Max {max}</p>
      </div> 
    </div>
  )
};