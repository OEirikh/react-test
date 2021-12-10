import React from 'react';
import classNames from 'classnames';
import './TodoList.scss';

function ToDoList({ todos, onDeleteTodo, onTogleCompleted }) {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <input
            type="checkbox"
            className="TodoList__checkbox"
            checked={completed}
            onChange={() => onTogleCompleted(id)}
          />
          <p className="TodoList__text">{text}</p>
          <button
            type="button"
            className="TodoList__btn"
            onClick={() => onDeleteTodo(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
