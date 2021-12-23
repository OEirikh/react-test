import React, { Component } from 'react';
import './TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    return (
      <form className="TodoEditor" onSubmit={handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Создать TODO
        </button>
      </form>
    );
  }
}
export default TodoEditor;
