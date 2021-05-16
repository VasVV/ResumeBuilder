import {Container, Col, Row, Button, Form} from 'react-bootstrap';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ResumeStart from './img/resumestart.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

import BuildResume from './img/buildresume.svg';

import DownloadResume from './img/downloadresume.svg';

import TemplateOne from './img/templateone.jpg';
import TemplateTwo from './img/templatetwo.jpg';
import TemplateThree from './img/templatethree.jpg';
import { useSelector, useDispatch } from 'react-redux';
import PersonalInfo from './img/personalinfo.PNG';

export default function StepOne () {

    const dispatch = useDispatch();

    

    const [val, setVal] = useState({
        fname: '', lname: '', address: '', city: '', zip: '', country: '', email: '', phone: ''
    });


    const next = () => {
        dispatch({type: 'SUBMIT_INFO', payload: val });
        dispatch({type: 'UPDATE_TIP', payload: {num: 0, prev: '/stepone', next: '/steptwo', img: ''} });
    }

    return (
        <>
        <h3>COMPLETE YOUR RESUME HEADING</h3>
                        <p>Employers will use this information to contact you.</p>
            <Container fluid>
                <Row>
                    <Col xs={8}>
                        
                    <Form>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. John" onChange={(e) => setVal({...val, fname: e.target.value})} />
                                </Col>
                                <Col>
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. Smith" onChange={(e) => setVal({...val, lname: e.target.value})} />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="e.g. Main Street, 30" onChange={(e) => setVal({...val, address: e.target.value})}/>
                        </Form.Group>
                        
                        <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="e.g. Barcelona" onChange={(e) => setVal({...val, city: e.target.value})}/>
                            </Col>

                            <Col>
                                <Form.Label>ZIP code</Form.Label>
                                <Form.Control type="number" placeholder="e.g. 12345667" onChange={(e) => setVal({...val, zip: e.target.value})}/>
                            </Col>

                            <Col>
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="e.g. Spain" onChange={(e) => setVal({...val, country: e.target.value})}/>
                            </Col>
                        </Row>
                        </Form.Group>

                        <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" placeholder="e.g. john@smith.com" onChange={(e) => setVal({...val, email: e.target.value})}/>
                            </Col>

                            <Col>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="e.g. 1234567890" onChange={(e) => setVal({...val, phone: e.target.value})}/>
                            </Col>

                        </Row>
                        </Form.Group>
                        
                    </Form>
                    <Row>
                        <Col>
                        <Link to="/chosetemplate">
                    <Button variant="primary" className='btn-back'>Back</Button>
                    </Link> 
                    </Col>
                    <Col>
                    <Link  to={{
                        pathname: "/alltips",
                        state: { name: 'jack', age: 25, city: 'Antwerp'}
  }}>
                        <Button variant="primary" className=' float-right' onClick={() => next()}>
                            Save and next
                        </Button>
                    </Link>
                        </Col>
                        </Row>
                    </Col>
                    <Col>
                    <img src={PersonalInfo} />
                    </Col>
                </Row>
            </Container>
        </>

    )
}