import React, { Component } from 'react';
import shortid from 'shortid';

import Section from './components/Section';
import Container from './components/Container';
import PaintingList from './components/PaintingList/PaintingList';
import ColorPicker from './components/ColorPicker/ColorPicker';
import colorPickerOptions from './components/ColorPicker/ColorPickerOptions.json';
import Alert from './components/Alert/Alert';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import paintings from './components/Painting/paintings.json';
// import InitialTodos from './components/TodoList/TodoList.json';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import TodoFiltr from './components/TodoFilter';
import Form from './components/Form/Form';
import Modal from './components/Modal';
import Clock from './components/Clock';
import Tabs from './components/Tabs';
import tabs from './components/Tabs/tabs.json';
import { Filter } from './components/Filter/Filter.jsx';
import IconButton from './components/IconButton';
// імпорт svg як компонент реакта
import { ReactComponent as CloseIcon } from './icons/delete.svg';

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    // console.log('App componentDidMount');
    const todos = JSON.parse(localStorage.getItem('todos'));
    // console.log(todos);
    if (todos) {
      this.setState({ todos: todos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');
    // console.log(prevState);
    // console.log(this.state);
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    // console.log(todo);

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(ps => ({
      todos: ps.todos.filter(todo => todo.id !== todoId),
    }));
  };

  changeFiltr = ({ currentTarget }) => {
    this.setState({ filter: currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalasingFiltr = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalasingFiltr),
    );
  };

  getComplitedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  togleCompleted = todoId => {
    // console.log(todoId);
    // this.setState(ps => ({
    //   todos: ps.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('Нашли нужний todo');
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  formSubmitData = data => console.log(data);

  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    console.log('App  Render ');

    const { todos, filter, showModal } = this.state;
    const {
      addTodo,
      deleteTodo,
      formSubmitData,
      togleCompleted,
      changeFiltr,
      getVisibleTodos,
      getComplitedTodos,
      togleModal,
    } = this;

    const countComplitedTodo = getComplitedTodos();
    const visibleTodo = getVisibleTodos();

    return (
      <div>
        <Container>
          <Section>
            <Filter />
          </Section>
          <Tabs items={tabs} />
          <button type="button" onClick={togleModal}>
            Open/Close Clock
          </button>
          {showModal && (
            <Modal onClose={togleModal}>
              <IconButton onClick={togleModal} aria-label="Закрить модалку">
                {/* Кнопка іконка */}
                <CloseIcon width="30" fill="#fff" />
              </IconButton>
              <Clock />
            </Modal>
          )}
          <Section title="Форма">
            <Form onSubmit={formSubmitData} />
          </Section>

          <Section title="ToDoList">
            <div>
              <p>Total Todo: {todos.length}</p>
              <p>Complited Todo: {countComplitedTodo}</p>
            </div>

            <TodoEditor onSubmit={addTodo} />

            <TodoFiltr value={filter} onChange={changeFiltr} />

            <TodoList
              todos={visibleTodo}
              onDeleteTodo={deleteTodo}
              onTogleCompleted={togleCompleted}
            />
          </Section>

          <Section title="Карточки продуктов">
            <PaintingList items={paintings} />
          </Section>

          <Section title="Состояние компонента">
            <Counter initialValue={10} />
          </Section>

          <Section title="Випадающее меню">
            <Dropdown />
          </Section>

          <Section title="Color Picker">
            <ColorPicker options={colorPickerOptions} />
          </Section>

          <Alert text="success" type="success" />
          <Alert text="warning" type="warning" />
          <Alert text="error" type="error" />
        </Container>
      </div>
    );
  }
}

export default App;

// const [first, , third] = 'hello sweet world'.split(' ');
// console.log(first, third);
