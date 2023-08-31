import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ModalConfirm from '../ModalConfirm/ModalConfirm';
import '../../app/App.scss';

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
      <h2>Scheduled Appointments:</h2>
      <div className='appointment-box'>
        {appointments.map((appointment, index) => (
          <div className='appointment-card-box'>
            <Card>
              <Card.Body key={index}>
                <p><strong>Service Type:</strong>{appointment.selectedOption}</p>
                <p><strong>Appointment Date:</strong>{appointment.date}</p>
                <p><strong>Name:</strong>{appointment.name}</p>
                <p><strong>Last Name:</strong>{appointment.lastName}</p>
                <p><strong>Appointment Hour:</strong>{appointment.time}</p>
                <p><strong>Subject:</strong>{appointment.subject}</p>
                <p><strong>Location:</strong>{appointment.selectedLocation}</p>
              </Card.Body>
              <div className='cancel-btn-box'>
              <Button
                  className='cancel-btn'
                  variant="outline-danger"
                  onClick={() => openConfirmModal(index)}
                  aria-label={`Eliminar cita de ${appointment.name} ${appointment.lastName}`}
                >
                  Cancel Appointment
                </Button>
            </div>
            </Card>
          </div>
        ))}
      </div>
      <ModalConfirm
        show={showConfirmModal}
        onClose={closeConfirmModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
}

export default AppointmentsList;
