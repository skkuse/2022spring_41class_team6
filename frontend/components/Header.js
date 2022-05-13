import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown,Offcanvas} from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from 'react'
export default function Header()
{ const [color, setColor] = useState('blue')

    useEffect(() => setColor('white'), [])
    return (
        <Navbar bg="success" expand={false}>
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Brand href="/" style={{color:`${color}`}}>WebSite Title</Navbar.Brand>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                >
                    <Offcanvas.Header  closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ProfileCard/>
                        <Nav className="justify-content-md-center">
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                            <NavDropdown className="justify-content-md-center" title="Chapter 1" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3">1.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">2.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">3.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">4.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">5.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">6.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">7.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">8.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">9.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">10.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">11.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">12.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">13.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">14.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">15.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">16.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">17.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">18.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">19.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">20.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">21.소챕처</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="Chapter 1" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3">1.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">2.소챕처</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Chapter 1" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3">1.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">2.소챕처</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Chapter 1" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3">1.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">2.소챕처</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Chapter 1" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3">1.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">2.소챕처</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}