import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = () => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push('/')} className="modal-backdrop">
      <div onClick={e => e.stopPropagation()} id="modal1" className="modal">
        <div className="modal-content">
          <h4>Delete stream</h4>
          <p>Are you sure you want to delete stream?</p>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Cancel
          </a>
          <a href="#!" className="modal-close btn red waves-effect waves-light">
            <i className="material-icons left">delete</i> DELETE
          </a>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
