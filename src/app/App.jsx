import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss'
import AppointmentsList from '../components/DateList/AppointmentList';
import AppointmentForm from '../components/DateForm/AppointmentForm';
import ModalSucces from '../components/Modal/ModalSucces';
import useAppointments from '../hooks/useAppointments';
import useModal from '../hooks/useModal';
import Layout from '../components/Layout/Layout';
import '../app/App.scss';

function App() {
  const { appointments, addAppointment, deleteAppointment } = useAppointments();
  const { showModal, openModal, closeModal } = useModal();

  return (
    <Router>
      <Layout>
        <div className='App'>
          <h1 className='title-app'>App-ointer Drive License</h1>
            <Routes>
              <Route path="/" element={<AppointmentForm addAppointment={addAppointment} openModal={openModal} />} />
              <Route path="/appointments" element={<AppointmentsList appointments={appointments} deleteAppointment={deleteAppointment} />} />
            </Routes>
          <ModalSucces showModal={showModal} closeModal={closeModal} />
        </div>
      </Layout>
    </Router>
  )
}

export default App
