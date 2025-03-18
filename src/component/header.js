import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

//import { Link } from "react-router-dom";
import "../css/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../img/Logo.png";

//import { Link } from "react-router-dom";

function Header() {
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      {/* Contact Info Section */}
     

<div className="background">
<div className="container">
    <Navbar  expand="lg">
      <Container fluid>
        <Navbar.Brand href="./">
        <img src={logo} alt="Logo" />
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="./" className="mx-2">Home</Nav.Link>
            <Nav.Link href="./feature" className="mx-2">Feature</Nav.Link>
             <Nav.Link href="./pricing" className="mx-2">Pricing</Nav.Link>
            <Nav.Link href="./intigration" className="mx-2">Integration</Nav.Link>
            {/* <Nav.Link href="./about" className="mx-2"></Nav.Link> */}

          </Nav>
          <Nav>
            
            
            <Button variant="dark" className="rounded px-4">Sign-in</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

</div>

    
      </>
  );
}

export default Header;
