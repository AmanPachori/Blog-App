import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Container,Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



const navbar = () => {
  const token = localStorage.getItem('jwt');
  const logOut = () =>{
   localStorage.removeItem('jwt');
   localStorage.removeItem('id');
   window.location = '/';
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="mb-2"
    >
      <Container>
        <Navbar.Brand href="/" className="title">
          Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbarLink">
            <Nav.Link style={{ color: "#fff" }} href="/">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} href="/dashboard">
              Dashboard
            </Nav.Link>
            {!token ? (
              <Nav.Link style={{ color: "#fff" }} href="/Signin">
                Signin
              </Nav.Link>
            ) : (
              <Nav.Link style={{ color: "#fff" }} href="/" onClick={() => {
                logOut();
              }}>
                Logout

              </Nav.Link> 
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar