import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalConfirm({ show, onClose, onConfirm }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm appointment cancellation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to cancel this appointment?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalConfirm;
