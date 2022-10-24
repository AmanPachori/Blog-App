import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Container,Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



const navbar = () => {
  const token = localStorage.getItem('token');
  const logOut = () =>{
   localStorage.removeItem('token');
   localStorage.removeItem('id');
   window.location = '/';
  }
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
            {(token )?<Nav.Link style={{color:'#fff'}} href="/Signin">Signin</Nav.Link>
: <Button variant="outline-light" style={{color:'#fff'}} href="/Signin" onClick={()=>{
  logOut();
}} className="bg-transparent border-0">Logout</Button>}
          </Nav>
        </Navbar.Collapse></div>
      </Container>
    </Navbar>  )
}

export default navbar