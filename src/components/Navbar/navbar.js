import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



const navbar = () => {
  return (
<Navbar >
      <Container className="border rounded p-2 d-flex justify-content-between" >
        <div>
         <Navbar.Brand  style={{color:'#fff'}} href="/">Blog App </Navbar.Brand>
        </div>
        <div><Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color:'#fff'}} href="/">Home</Nav.Link>
            <Nav.Link style={{color:'#fff'}} href="/dashboard">Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse></div>
      </Container>
    </Navbar>  )
}

export default navbar