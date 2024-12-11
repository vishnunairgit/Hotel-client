import React from 'react';
import './landingnav.css';
import Logo from '../../Assets/logooo.png'
import { useNavigate } from 'react-router-dom';

function LandingNav() {
  const navigate = useNavigate();

  const handleMenu = () => {
    navigate('/Addmenu');
  };
  const handleLanding = () => {
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        <div onClick={handleLanding} className="navbar-logo">
          <img src={Logo} alt="Logo" className="logo-img" />
          <div className="text-container">
            <div className="text-line">
              <span className="deep-net">DEEP</span> <span className="net">NET</span>
            </div>
            <div className="soft">SOFT</div>
          </div>
        </div>



        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-links">
            <li className="nav-item">
              <a className="nav-link" >HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={handleMenu}>ADD MENU</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >MAKE AN ORDER</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default LandingNav;


