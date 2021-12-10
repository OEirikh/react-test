import React, { Component } from 'react';
import shortid from 'shortid';
import Section from './components/Section';
import PaintingList from './components/PaintingList/PaintingList';
import ColorPicker from './components/ColorPicker/ColorPicker';
import colorPickerOptions from './components/ColorPicker/ColorPickerOptions.json';
import Alert from './components/Alert/Alert';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import paintings from './paintings.json';
import InitialTodos from './components/ToDoList/TodoList.json';
import ToDoList from './components/ToDoList';
import TodoEditor from './components/TodoEditor';
import TodoFiltr from './components/TodoFiltr';
import Form from './components/Form/Form';

class App extends Component {
  state = {
    todos: InitialTodos,
    filter: '',
  };

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

  render() {
    const { todos, filter } = this.state;
    const {
      addTodo,
      deleteTodo,
      formSubmitData,
      togleCompleted,
      changeFiltr,
      getVisibleTodos,
      getComplitedTodos,
    } = this;

    const countComplitedTodo = getComplitedTodos();
    const visibleTodo = getVisibleTodos();

    return (
      <div>
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

          <ToDoList
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
      </div>
    );
  }
}

export default App;
