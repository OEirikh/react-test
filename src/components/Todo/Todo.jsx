import React from 'react';
import './Todo.scss';

const Todo = ({ text, completed, onTogleCompleted, onDelete }) => (
  <div>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
      onChange={onTogleCompleted}
    />
    <p className="TodoList__text">{text}</p>
    <button type="button" className="TodoList__btn" onClick={onDelete}>
      Удалить
    </button>
  </div>
);

export default Todo;
