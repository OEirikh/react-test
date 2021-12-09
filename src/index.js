// import React from 'react'; React импортировать для создания елементов не нужно
// нужно для строгого режима https://ru.reactjs.org/docs/strict-mode.html
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// імпорт нормалайза стилей
import 'modern-normalize/modern-normalize.css';

import './styles/base.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);

// ---------------------------------------------------------------
// const element = React.createElement('div', {
//   a: 5,
//   b: 6,
//   children: 'Привет мир',
// });

// const elem1 = React.createElement('span', { children: 'Привет' }); - создание елемента с помощю React.createElement

// создание елемента с помощю jsx - xml-подобний синтаксис(у одинарних тегов должен бить закривающий слеш/ )
const elem1 = <span>Привет </span>;

// const elem2 = React.createElement('span', { children: 'мир' });
const elem2 = <span>мир</span>;

console.log(elem1, elem2);

const jsxElement = (
  <div>
    {elem1}
    {elem2}
  </div>
);
console.log(jsxElement);

// рендер разметки в DOM
// ReactDOM.render(jsxElement, document.querySelector('#root'));

// ---------------------------------------------------------------
