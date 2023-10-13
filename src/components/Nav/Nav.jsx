import { Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillCalendarCheckFill } from 'react-icons/bs';

const HeaderNav = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="nav-styles">
      <Container>
        <NavLink to='/'>
          <BsFillCalendarCheckFill size={40} color="white" />
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