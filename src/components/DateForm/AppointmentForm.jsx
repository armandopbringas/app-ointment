import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col, FormCheck  } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AppointmentForm({ addAppointment, openModal }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [subject, setSubject] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedLocation, setSelectedLocation] = useState('norte');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedOption || !name || !lastName || !date || !time || !subject || !selectedLocation) {
      setShowAlert(true);
      return;
    }

    if (selectedOption && name && lastName && date && time && subject && selectedLocation) {
      const newAppointment = { selectedOption, name, lastName, date, time, subject, selectedLocation };
      addAppointment(newAppointment);
      openModal();
      setName('');
      setLastName('');
      setDate('');
      setTime('');
      setSubject('');
      setSelectedOption('option1');
      setSelectedLocation('norte');
      navigate('/appointments');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <Row>
        <Col>
          <Form.Group controlId="radioOptions">
            <Form.Label>Opciones</Form.Label>
            <div>
              <FormCheck
                type="radio"
                id="option1"
                name="radioOptions"
                label="Opción 1"
                checked={selectedOption === 'option1'}
                onChange={() => setSelectedOption('option1')}
              />
              <FormCheck
                type="radio"
                id="option2"
                name="radioOptions"
                label="Opción 2"
                checked={selectedOption === 'option2'}
                onChange={() => setSelectedOption('option2')}
              />
              <FormCheck
                type="radio"
                id="option3"
                name="radioOptions"
                label="Opción 3"
                checked={selectedOption === 'option3'}
                onChange={() => setSelectedOption('option3')}
              />
            </div>
          </Form.Group>
        </Col>
      </Row>
      <Form.Label>Locación</Form.Label>
        <Form.Control
          as="select"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="norte">Norte</option>
          <option value="sur">Sur</option>
          <option value="este">Este</option>
          <option value="oeste">Oeste</option>
        </Form.Control>
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
