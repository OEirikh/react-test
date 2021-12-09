import React from 'react';
import s from './ToDoList.module.css';
import './TodoList.scss';

function ToDoList({ todos, onDeleteTodo }) {
  return (
    <ul className={s.todoList}>
      {todos.map(({ id, text, complited }) => (
        <li key={id} className={s.item}>
          {text}
          <button type="button" onClick={() => onDeleteTodo(id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
