import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import Ava from "./ava.jpg";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className='mb-3'
          bg='dark'
          variant='dark'
        >
          <Container fluid>
            <LinkContainer to='/'>
              <Navbar.Brand>PostsApp</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='start'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <div className='avatar'>
                    <Image
                      src={Ava}
                      alt='my-ava'
                      fluid
                      roundedCircle
                      className='my-pic'
                    />
                    <div>
                      <p className='avatar__name'>Регина</p>
                      <Link
                        className='avatar__mail'
                        to='mailto:reina5425@gmail.com'
                      >
                        reina5425@gmail.com
                      </Link>
                    </div>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <LinkContainer to='/'>
                    <Nav.Link>Список постов</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/about-me'>
                    <Nav.Link>Обо мне</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
