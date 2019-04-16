import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="modal-backdrop">
      <div onClick={e => e.stopPropagation()} id="modal1" className="modal">
        <div className="modal-content">
          <h4>{props.title}</h4>
          <p>{props.content}</p>
        </div>
        <div className="modal-footer">
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
