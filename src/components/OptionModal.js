import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <div>
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      onRequestClose = {props.closeModal}
      closeTimeoutMS={200}
      className="modal"
    >
      <div className="modal__title">
        <h1>Selected Text</h1>
      </div>
      <div className="modal__body">
        {props.selectedOption && <p>{props.selectedOption}</p>}
      </div>
      <button className="button" onClick={props.closeModal}>Okay</button>
    </Modal>
  </div>
);

export default OptionModal;