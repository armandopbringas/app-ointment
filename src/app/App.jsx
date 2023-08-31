import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.scss'
import AppointmentsList from '../components/DateList/AppointmentList';
import AppointmentForm from '../components/DateForm/AppointmentForm';
import ModalSucces from '../components/Modal/ModalSucces';
import useAppointments from '../hooks/useAppointments';
import useModal from '../hooks/useModal';

function App() {
  const { appointments, addAppointment, deleteAppointment } = useAppointments();
  const { showModal, openModal, closeModal } = useModal();

  return (
    <Router>
      <Container className="App" >
        <h1>Cita App</h1>
        <Routes>
            <Route path="/" element={<AppointmentForm addAppointment={addAppointment} openModal={openModal} />} />
            <Route path="/appointments" element={<AppointmentsList appointments={appointments} deleteAppointment={deleteAppointment} />} />
          </Routes>
        <ModalSucces showModal={showModal} closeModal={closeModal} />
      </Container>
    </Router>
  )
}

export default App
