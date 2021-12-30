import React from 'react';
import classNames from 'classnames';
import Todo from '../Todo';
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
          <Todo
            text={text}
            completed={completed}
            onTogleCompleted={() => {
              onTogleCompleted(id);
            }}
            onDelete={() => {
              onDeleteTodo(id);
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
