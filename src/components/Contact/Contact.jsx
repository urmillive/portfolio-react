import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import "./Contact.css"
const Contact = () => {
    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col lg={ 6 } md={ { span: 6, offset: 3 } } sm={ 12 }>
                        <h1 className="text-center font-monospace fw-bolder display-2 my-5 contact-heading-title">Contact Me</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={ 6 } md={ { span: 6, offset: 3 } } sm={ 12 }>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='fw-bold'>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicMessage">
                                <Form.Label className='fw-bold'>Your Message</Form.Label>
                                <div className="mb-3">
                                    <textarea className="form-control" name="message" id="message" rows="3" required></textarea>
                                </div>
                            </Form.Group>
                            <Button className="d-block w-100 contact-submit-button" type="submit">
                                Connect Me
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact