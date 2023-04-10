import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import {Link} from 'react-router-dom'

const Signup = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card id='form-card'>
                        <Card.Header className='text-center '>
                            <h3>Signup</h3>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password confirmation</Form.Label>
                                    <Form.Control type="password" placeholder="Password confimration" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Text>
                                        <Link to="/login">Already signed up?</Link>
                                    </Form.Text>
                                </Form.Group >
                                <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup