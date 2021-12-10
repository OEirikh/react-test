import React, { Component } from 'react';
import './TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };
  hendleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.hendleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.hendleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Создать TODO
        </button>
      </form>
    );
  }
}
export default TodoEditor;
