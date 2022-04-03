import React, { useState } from 'react';
import shortid from 'shortid';

export default function Form() {
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const [expirience, setExpirience] = useState(null);
  const [licence, setLisence] = useState(false);

  const nameInputId = shortid.generate();
  const tagInputId = shortid.generate();

  const formReset = () => {
    setName('');
    setTag('');
    setExpirience(null);
    setLisence(false);
  };

  const hendleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'tag':
        setTag(value);
        break;
      case 'expirience':
        setExpirience(value);
        break;
      default:
        return;
    }
  };

  const hendelLicenceChange = e => {
    const { checked } = e.currentTarget;
    //     console.log(e.currentTarget.checked);
    setLisence(checked);
  };

  const hendleSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    formReset();
  };

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

// class Form extends Component {
//   state = {
//     name: '',
//     tag: '',
//     expirience: null,
//     licence: false,
//   };

//   nameInputId = shortid.generate();
//   tagInputId = shortid.generate();

//   formReset = () => {
//     this.setState({
//       name: '',
//       tag: '',
//       expirience: 'junior',
//       licence: false,
//     });
//   };

//   hendleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   hendelLicenceChange = e => {
//     const { checked } = e.currentTarget;
//     console.log(e.currentTarget.checked);
//     this.setState({
//       licence: checked,
//     });
//   };

//   hendleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.formReset();
//   };

//   render() {
//     const { name, tag, expirience, licence } = this.state;
//     const {
//       hendleChange,
//       hendleSubmit,
//       hendelLicenceChange,
//       nameInputId,
//       tagInputId,
//     } = this;
//     return (
//       <form onSubmit={hendleSubmit}>
//         <label htmlFor={nameInputId}>
//           Имя
//           <input
//             type="text"
//             value={name}
//             name="name"
//             id={nameInputId}
//             onChange={hendleChange}
//           />
//         </label>
//         <label htmlFor={tagInputId}>
//           Ник
//           <input
//             type="text"
//             value={tag}
//             name="tag"
//             id={tagInputId}
//             onChange={hendleChange}
//           />
//         </label>
//         <p>Your level</p>
//         <label>
//           <input
//             type="radio"
//             name="expirience"
//             value="junior"
//             onChange={hendleChange}
//             checked={expirience === 'junior'}
//           />
//           Junior
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="expirience"
//             value="middl"
//             onChange={hendleChange}
//             checked={expirience === 'middl'}
//           />
//           Middl
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="expirience"
//             value="senior"
//             onChange={hendleChange}
//             checked={expirience === 'senior'}
//           />
//           Senior
//         </label>
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             name="licence"
//             checked={licence}
//             onChange={hendelLicenceChange}
//           />
//           Соглашаюсь работать за еду
//         </label>
//         <br />
//         <button type="submit" disabled={!licence}>
//           Submit
//         </button>
//       </form>
//     );
//   }
// }
