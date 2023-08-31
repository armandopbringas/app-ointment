import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalSucces({ showModal, closeModal, confirmModal }) {
  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Appointment scheduled</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>The appointment has been successfully saved</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSucces;
