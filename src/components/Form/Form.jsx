import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    expirience: null,
    licence: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  formReset = () => {
    this.setState({
      name: '',
      tag: '',
      expirience: 'junior',
      licence: false,
    });
  };

  hendleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  hendelLicenceChange = e => {
    const { checked } = e.currentTarget;
    console.log(e.currentTarget.checked);
    this.setState({
      licence: checked,
    });
  };

  hendleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.formReset();
  };

  render() {
    const { name, tag, expirience, licence } = this.state;
    const {
      hendleChange,
      hendleSubmit,
      hendelLicenceChange,
      nameInputId,
      tagInputId,
    } = this;
    return (
      <form onSubmit={hendleSubmit}>
        <label htmlFor={nameInputId}>
          Имя
          <input
            type="text"
            value={name}
            name="name"
            id={nameInputId}
            onChange={hendleChange}
          />
        </label>
        <label htmlFor={tagInputId}>
          Ник
          <input
            type="text"
            value={tag}
            name="tag"
            id={tagInputId}
            onChange={hendleChange}
          />
        </label>
        <p>Your level</p>
        <label>
          <input
            type="radio"
            name="expirience"
            value="junior"
            onChange={hendleChange}
            checked={expirience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="expirience"
            value="middl"
            onChange={hendleChange}
            checked={expirience === 'middl'}
          />
          Middl
        </label>
        <label>
          <input
            type="radio"
            name="expirience"
            value="senior"
            onChange={hendleChange}
            checked={expirience === 'senior'}
          />
          Senior
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={licence}
            onChange={hendelLicenceChange}
          />
          Соглашаюсь работать за еду
        </label>
        <br />
        <button type="submit" disabled={!licence}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
