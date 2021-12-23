import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

// Модальное окно (componentDidMount и componentWillUnmount)
// Проблема z-index, как решать без костылей (порталы)
// Слушатель на keydown для Escape
// Слушатель на клик по Backdrop

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.hendleKeydownESC);
  }

  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.hendleKeydownESC);
  }

  hendleKeydownESC = e => {
    if (e.code === 'Escape') {
      console.log(e.code);
      this.props.onClose();
    }
  };

  hendleClickOnBackdrop = e => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { hendleClickOnBackdrop } = this;

    return createPortal(
      <div className="Modal__backdrop" onClick={hendleClickOnBackdrop}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
