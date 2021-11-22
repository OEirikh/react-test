import s from './ColorPicker.module.css';
import PropTypes from 'prop-types';

function ColorPicker({ options }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>ColorPicker</h2>
      <div>
        {options.map(option => (
          <span
            className={s.option}
            key={option.id}
            style={{ backgroundColor: option.color }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;

ColorPicker.prototype = {
  options: PropTypes.object.isRequired,
};
