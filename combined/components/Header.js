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
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=1">1.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=2">2.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=3">3.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=4">4.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=5">5.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=6">6.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=7">7.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=8">8.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=9">9.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=10">10.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=11">11.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=12">12.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=13">13.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=14">14.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=15">15.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=16">16.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=17">17.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=18">18.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=19">19.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=20">20.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=1&subchapter=21">21.소챕처</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="Chapter 2" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="/book/contents?chapter=2&subchapter=1">1.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=2&subchapter=2">2.소챕처</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Chapter 3" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="/book/contents?chapter=3&subchapter=1">1.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=3&subchapter=2">2.소챕처</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Chapter 4" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="/book/contents?chapter=4&subchapter=1">1.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=4&subchapter=2">2.소챕처</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Chapter 5" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="/book/contents?chapter=5&subchapter=1">1.소챕처</NavDropdown.Item>
                                <NavDropdown.Item href="/book/contents?chapter=5&subchapter=2">2.소챕처</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}