import React, { useState } from 'react';
import { Form, Button, Alert, FormCheck,Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../app/App.scss';

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
      <h5 className='app-text-instruction'>
        Schedule your appointment to process your driver's license
      </h5>
      <div className='row'>
        <Form.Group>
          <Form.Label >Appointment Date</Form.Label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Appointment Date</Form.Label>
          <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </Form.Group>
      </div>
      <Form.Group controlId="name">
        <Form.Label htmlFor="name">First Name:</Form.Label>
        <Form.Control
          required
          type="text"
          aria-required="true"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label htmlFor="lastName">Last Name:</Form.Label>
        <Form.Control
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          aria-required="true"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Subject:</Form.Label>
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
            <Form.Label>Choose a Service Type</Form.Label>
            <div>
              <FormCheck
                type="radio"
                id="option1"
                name="radioOptions"
                label="Upgrade to REAL ID"
                checked={selectedOption === 'option1'}
                onChange={() => setSelectedOption('option1')}
              />
              <FormCheck
                type="radio"
                id="option2"
                name="radioOptions"
                label="Driving Test"
                checked={selectedOption === 'option2'}
                onChange={() => setSelectedOption('option2')}
              />
              <FormCheck
                type="radio"
                id="option3"
                name="radioOptions"
                label="Vehicle Registration"
                checked={selectedOption === 'option3'}
                onChange={() => setSelectedOption('option3')}
              />
            </div>
          </Form.Group>
        </Col>
      </Row>
      <Form.Label>Location</Form.Label>
        <Form.Select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="Main Office">Main Office</option>
          <option value="West Branch Office">West Branch Office</option>
          <option value="East Branch Office">East Branch Office</option>
          <option value="South Branch Office">South Branch Office</option>
          <option value="North Branch Office">North Branch Office</option>
        </Form.Select>
        <p>Please note that the North Branch Office is closed on Mondays</p>
      <Button variant="outline-secondary" type="submit" aria-label="Guardar cita">
        Guardar cita
      </Button>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible role="alert" >
          Por favor, complete todos los campos.
        </Alert>
      )}
    </Form>
  );
}

export default AppointmentForm;
