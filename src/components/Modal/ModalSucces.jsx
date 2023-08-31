import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalSucces({ showModal, closeModal, confirmModal }) {
  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Cita Guardada</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>La cita ha sido guardada exitosamente.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={closeModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSucces;
