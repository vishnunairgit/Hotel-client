
import React from 'react';
import './landingnav.css';
import Logo from '../../Assets/logo---12 (1).png';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function LandingNav() {


  const navigate = useNavigate();

  const handleMenu = () => {
    navigate('/Addmenu')
  }






  return (

    <Navbar  expand="lg" className="navbar-dark custom-navbar">
      <Navbar.Brand href="#" className="navbar-logo">
        <img src={Logo} alt="Logo" className="logo-img" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-links">
          <Nav.Link href="#home" className="text-white">HOME</Nav.Link>
          <Nav.Link onClick={handleMenu} className="text-white">MENU</Nav.Link>
          <Nav.Link href="#order" className="text-white">MAKE AN ORDER</Nav.Link>
          <Nav.Link href="#contact" className="text-white">CONTACT US</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default LandingNav;




