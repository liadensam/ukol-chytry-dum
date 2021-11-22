import React, { useState } from 'react';
import './style.css';
import tempImg from './img/temp.svg';


const Climate = ({ temperature, humidity}) => {
  const [temp, setTemp] = useState(temperature);

  return (
    <div className = "climate">
      <div className = "climate__icon">
        <img src={tempImg} alt="temperature icon" />
      </div>

      <div className = "climate__content">
        <div className = "climate__temperature">{temp} &deg;C</div>
        <div className = "climate__humidity">Humidity {humidity} &nbsp;%</div>
      </div>

      <div className = "climate__controls">
        <button className = "button" onClick = {() => setTemp(temp + 1)}>+</button>
        <button className = "button" onClick = {() => setTemp(temp - 1)}>-</button>
      </div>
    </div>
  )
}


export default Climate;