import { Container, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import mainLog from '../../assets/logo.svg';

const HeaderNav = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to='/'>
          <img src={mainLog} alt="" width={100} />
        </NavLink>
        {location.pathname === '/' ? (
          <Button variant="link">
            <NavLink to="/appointments">
              View my appointments
            </NavLink>
          </Button>
        ) : (
          <NavLink to="/" >
            Book another appointment
          </NavLink>
        )}
      </Container>
    </Navbar>
  );
}

export default HeaderNav;