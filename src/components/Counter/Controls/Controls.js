import React from 'react';
// import PropTypes from 'prop-types';
import s from './Controls.module.css';

// Називать пропи которие передаются функциям "onЧто-то"
const Controls = ({ onIncrement, onDecrement }) => (
  <div className={s.controls}>
    <button type="button" onClick={onIncrement}>
      Увеличить на 1
    </button>

    <button type="button" onClick={onDecrement}>
      Уменьшить на 1
    </button>
  </div>
);

export default Controls;
