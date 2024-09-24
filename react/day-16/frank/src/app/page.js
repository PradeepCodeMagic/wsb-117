"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import myImg from "./images/HP_MOBILE_375x575_623ddd8a-0ef0-4b5b-aaa5-95fdd0f3f229_1536x.jpg"

export default function Home() {
  return (
  <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <div className="box">
      <img src={myImg}/>
    </div>

    {/* <div className="box">
      <Image  src={"https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_807de894-9db1-4f43-bbc3-b3e03027f224_450x.jpg?v=1725904281"} width={200} height={200} />
    </div> */}
  </>
  );
}
