import { useState } from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

import { Navigate, Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const TestVersionLayout = () => {
    const [userToken, setUserToken] = useState('2')

    if (!userToken) {
        return <Navigate to="/login" />
    }


    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Project Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-between'>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link >Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link >Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="teams">Teams</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link >Calendar</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Max Mustermann" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Settings
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Dark Mode</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Card>
                <Card.Header>
                    <h4 className='text-center my-1'>
                        <Link to="/">Try full version</Link>
                    </h4>
                </Card.Header>
            </Card>

        </>
    )
}

export default TestVersionLayout