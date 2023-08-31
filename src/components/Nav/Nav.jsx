import Container from 'react-bootstrap/Container';
import { NavLink, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import mainLog from '../../assets/logo.svg'

const HeaderNav = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={mainLog} alt="" width={100} />
        {location.pathname === '/' ? (
          <NavLink to="/appointments">Ver Citas</NavLink>
        ) : (
          <NavLink to="/" >Agendar otra cita</NavLink>
        )}
      </Container>
    </Navbar>
  );
}

export default HeaderNav;