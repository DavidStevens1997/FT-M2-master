import React from 'react';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (<div className={styles.container}>
     <input type="text" placeholder="Ciudad ..." />
     <button className={styles.btnSearch} onClick={() => onSearch ('Una ciudad')}>Agregar</button>
  </div>)
};