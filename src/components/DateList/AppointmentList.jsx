import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';
import ModalConfirm from '../ModalConfirm/ModalConfirm';

function AppointmentsList({ appointments, deleteAppointment }) {
  const [selectedAppointmentIndex, setSelectedAppointmentIndex] = useState(-1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openConfirmModal = (index) => {
    setSelectedAppointmentIndex(index);
    setShowConfirmModal(true);
  };

  const closeConfirmModal = () => {
    setShowConfirmModal(false);
  };

  const confirmDelete = () => {
    deleteAppointment(selectedAppointmentIndex);
    closeConfirmModal();
  };

  return (
    <div>
      <h2>Citas guardadas:</h2>
      <ListGroup>
        {appointments.map((appointment, index) => (
          <>
            <ListGroup.Item key={index}>
                <p><strong>Fecha:</strong> {appointment.date}</p>
                <p><strong>Nombre:</strong> {appointment.name}</p>
                <p><strong>Nombre:</strong> {appointment.lastName}</p>
                <p><strong>Hora:</strong> {appointment.time}</p>
                <p><strong>Asunto:</strong> {appointment.subject}</p>
            </ListGroup.Item>
            <Button variant="danger" onClick={() => openConfirmModal(index)}>
              Eliminar
            </Button>
          </>
        ))}
      </ListGroup>
      <ModalConfirm
        show={showConfirmModal}
        onClose={closeConfirmModal}
        onConfirm={confirmDelete}
      />
      <NavLink to="/" >Agendar otra cita</NavLink>
    </div>
  );
}

export default AppointmentsList;
