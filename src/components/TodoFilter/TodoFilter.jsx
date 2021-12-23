import React from 'react';
import './TodoFilter.scss';

function TodoFiltr({ value, onChange }) {
  return (
    <div className="TodoFilter">
      <p className="TodoFilter__label">Фильтр по содержимому</p>
      <input
        type="text"
        className="TodoFilter__input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TodoFiltr;
