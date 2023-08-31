import { useState, useEffect } from 'react';
import { Container, Form, Button, ListGroup, Modal } from 'react-bootstrap';
import './App.scss'

function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [subject, setSubject] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && time && subject) {
      const newAppointment = { name, date, time, subject };
      const updatedAppointments = [...appointments, newAppointment];
      setAppointments(updatedAppointments);
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
      setName('');
      setDate('');
      setTime('');
      setSubject('');
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="App" fluid="sm" >
      <h1>Cita App</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre:</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha:</Form.Label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Hora:</Form.Label>
          <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Asunto:</Form.Label>
          <Form.Control type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Guardar cita</Button>
      </Form>
      <div>
        <h2>Citas guardadas:</h2>
        <ListGroup>
          {appointments.map((appointment, index) => (
            <ListGroup.Item key={index}>
              <p><strong>Nombre:</strong> {appointment.name}</p>
              <p><strong>Fecha:</strong> {appointment.date}</p>
              <p><strong>Hora:</strong> {appointment.time}</p>
              <p><strong>Asunto:</strong> {appointment.subject}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

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
    </Container>
  )
}

export default App
