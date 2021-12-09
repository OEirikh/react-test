import React, { Component } from 'react';
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
import Form from './components/Form/Form';

class App extends Component {
  state = {
    todos: InitialTodos,
  };

  deleteTodo = todoId => {
    this.setState(ps => ({
      todos: ps.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitData = data => console.log(data);

  render() {
    const { todos } = this.state;
    const { deleteTodo, formSubmitData } = this;

    const countComplitedTodo = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

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
          <ToDoList todos={todos} onDeleteTodo={deleteTodo} />
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
