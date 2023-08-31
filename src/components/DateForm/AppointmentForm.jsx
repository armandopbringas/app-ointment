import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AppointmentForm({ addAppointment, openModal }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [subject, setSubject] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !lastName || !date || !time || !subject) {
      setShowAlert(true);
      return;
    }

    if (name && lastName && date && time && subject) {
      const newAppointment = { name, lastName, date, time, subject };
      addAppointment(newAppointment);
      openModal();
      setName('');
      setLastName('');
      setDate('');
      setTime('');
      setSubject('');
      navigate('/appointments');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <NavLink to="/appointments" activeClassName="active-link">Ver Citas</NavLink>
      <Form.Group>
        <Form.Label>Día de la cita:</Form.Label>
        <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Hora de la cita</Form.Label>
        <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Apellidos:</Form.Label>
        <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Asunto:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </Form.Group>
      <Button variant="outline-secondary" type="submit">Guardar cita</Button>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          Por favor, complete todos los campos.
        </Alert>
      )}
    </Form>
  );
}

export default AppointmentForm;
