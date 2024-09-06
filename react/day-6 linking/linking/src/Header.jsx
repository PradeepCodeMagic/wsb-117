import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    
    <>
        <div>
      <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Brand href="#home">
            <Link to={"/"} className='text-black' >Logo</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav>
                <Link to={"/"} >Home</Link>
            </Nav>

            <Nav>
                <Link to={"/about"} >About</Link>
            </Nav>

            <Nav>
                <Link to={"/gallery"} >Gallery</Link>
            </Nav>

            <Nav className='mx-2  ' >
                <Link className='text-black' to={"/todo"} >To-do app</Link>
            </Nav>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}
