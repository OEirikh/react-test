import React from 'react';
import PropTypes from 'prop-types';
import s from './Counter.module.css';
import Controls from './Controls/Controls';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number,
  };

  // constructor() {
  //   // super()- визов конструктора родителя до того как использовать this в нутри конструктора ребенка
  //   super();

  //   this.state = {
  //     value: 0,
  //   };
  // }

  // при изменении state создается новий обект
  state = {
    value: this.props.initialValue,
  };

  hendleIncrement = e => {
    console.log('click on increment');
    // что б использовать event в асинхронном коде его нужно сохранять в переменную
    console.log(e);
    // изменение обекта state /this.setState()/
    this.setState(ps => ({ value: ps.value + 1 }));
  };

  hendleDecrement = () => {
    this.setState(ps => ({ value: ps.value - 1 }));
  };

  // метод класса render() возвращяет разметку и только разметку(рендерит ее)
  render() {
    return (
      <div className={s.counter}>
        <span className={s.value}>{this.state.value}</span>

        <Controls
          onIncrement={this.hendleIncrement}
          onDecrement={this.hendleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
