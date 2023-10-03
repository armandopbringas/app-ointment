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
  const [selectedOption, setSelectedOption] = useState('Main Office');
  const [selectedLocation, setSelectedLocation] = useState('Main Office');
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
      setSelectedOption('Main Office');
      setSelectedLocation('norte');
      navigate('/appointments');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h5 className='app-text-instruction'>
        Schedule your appointment to process your driver's license
      </h5>
      <div className='input-row'>
        <Form.Group className='item'>
          <Form.Label >Appointment Date</Form.Label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
        <Form.Group className='item'>
          <Form.Label>Appointment Date</Form.Label>
          <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </Form.Group>
      </div>
      <div className='input-row'>
        <Form.Group controlId="name" className='item'>
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
        <Form.Group controlId="lastName" className='item'>
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
      </div>
      <Form.Group className='input'>
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
            <div className='input-row'>
              <FormCheck
                type="radio"
                id="Upgrade to REAL ID"
                name="radioOptions"
                label="Upgrade to REAL ID"
                checked={selectedOption === 'Upgrade to REAL ID'}
                onChange={() => setSelectedOption('Upgrade to REAL ID')}
              />
              <FormCheck
                type="radio"
                id="Driving Test"
                name="radioOptions"
                label="Driving Test"
                checked={selectedOption === 'Driving Test'}
                onChange={() => setSelectedOption('Driving Test')}
              />
              <FormCheck
                type="radio"
                id="Vehicle Registration"
                name="radioOptions"
                label="Vehicle Registration"
                checked={selectedOption === 'Vehicle Registration'}
                onChange={() => setSelectedOption('Vehicle Registration')}
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
        <p className='subject-input'>
          Please note that the North Branch Office is closed on Mondays
        </p>
        <div className='btn-box'>
          <Button
            type="submit"
            variant="outline-secondary"
            aria-label="Guardar cita"
            className='btn'
          >
            Save date
          </Button>
        </div>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible role="alert" >
          Please fill out all the fields
        </Alert>
      )}
    </Form>
  );
}

export default AppointmentForm;
