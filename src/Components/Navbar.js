import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { faTree } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
// function resetBgNavbar() {
//   window.onscroll = function () {
//     if (window.scrollY > 100) {
//       document.querySelector('.navbar')
//     }
//     backgroundColor: () ? "#f55" : "#fff"
// style={resetBgNavbar}
//   }
// }
export default function NavbarHome() {
  return <div>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><FontAwesomeIcon icon={faTree} className='icons'></FontAwesomeIcon>Into The Woods</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Poems"> POEMS</Nav.Link>
            <Nav.Link href="#About"> ABOUT ME</Nav.Link>
            <Nav.Link href="#Contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </div >;
}
