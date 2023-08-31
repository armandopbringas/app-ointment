import { Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import mainLog from '../../assets/logo.svg';

const HeaderNav = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="nav-styles">
      <Container>
        <NavLink to='/'>
          <img src={mainLog} alt="" width={100} />
        </NavLink>
        {location.pathname === '/' ? (
          <NavLink to="/appointments" className='link-styles'>
            View my appointments
          </NavLink>
        ) : (
          <NavLink to="/" className='link-styles'>
            Book another appointment
          </NavLink>
        )}
      </Container>
    </Navbar>
  );
}

export default HeaderNav;