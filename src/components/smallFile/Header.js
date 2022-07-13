import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import Logo from './Logo';
const Header = () => {
    return (
        <>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        < ><Link className="text-decoration-none"  to="/" > <Logo/> </Link></>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
              <Link to="/login" className="btn btn-primary btn-sm" href="">Log In</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        </>
    )
}

export default Header
