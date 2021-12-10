import { Component } from 'react';
import classNames from 'classnames';
import s from './ColorPicker.module.css';
// import PropTypes from 'prop-types';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    // const optionClasses = [s.option];
    // console.log([s.option]);
    // if (this.state.activeOptionIdx === index) {
    //   optionClasses.push(s.active);
    // }
    // return optionClasses.join(' ');
    // const active = s.active;

    return classNames(s.option, {
      [`${s.active}`]: this.state.activeOptionIdx === index,
    });
  };

  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;
    const { label } = options[activeOptionIdx];

    return (
      <div className={s.container}>
        <h2 className={s.title}>ColorPicker</h2>
        <p>цвет: {label}</p>
        <div>
          {options.map(({ color, id }, index) => (
            <button
              type="button"
              className={this.makeOptionClassName(index)}
              key={id}
              style={{ backgroundColor: color }}
              onClick={() => {
                this.setActiveIdx(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;

// ColorPicker.prototype = {
//   options: PropTypes.object.isRequired,
// };
