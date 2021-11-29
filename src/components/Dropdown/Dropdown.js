import { Component } from 'react';
import s from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: true,
  };

  togle = () => {
    this.setState(ps => ({
      visible: !ps.visible,
    }));
  };

  // show = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // };

  // hide = () => {
  //   this.setState({
  //     visible: false,
  //   });
  // };

  render = () => (
    <div className={s.Dropdown}>
      <button type="button" className="Dropdown__toggle" onClick={this.togle}>
        {this.state.visible ? 'Скрить' : 'Показать'}
      </button>

      {/* <button type="button" className="Dropdown__toggle" onClick={this.hide}>
        Скрить
      </button> */}

      {/* <div className={s.Menu}>MENU</div> */}

      {this.state.visible && <div className={s.Menu}>MENU</div>}
    </div>
  );
}
export default Dropdown;
