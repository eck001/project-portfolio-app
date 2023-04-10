import React from 'react'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link, Outlet } from 'react-router-dom'
import NavbarComponent from './NavbarComponent'


const GuestLayout = () => {
    return (
        <>
            <NavbarComponent/>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h4 className='text-center mt-5'>
                            <Link to="/testversion">Try test version</Link>
                        </h4>

                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default GuestLayout