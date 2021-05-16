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
import educationimg from './img/education.PNG';

export default function StepThree () {
    const dispatch = useDispatch();
    const [val, setVal] = useState({
        school: '', city: '', country: '', degree: '', field: '', endYear: '', endMonth: ''
    });
   return (
    <>
    <h3>EDUCATION</h3>
        <p>Add information about your educational background.</p>
            <Container fluid>
                <Row>
                    <Col xs={8}>
                        
                    <Form>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>School name</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. Harvard" onChange={(e) => setVal({...val, school: e.target.value})} />
                                </Col>
                                <Col>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. Barcelona" onChange={(e) => setVal({...val, city: e.target.value})} />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. Spain" onChange={(e) => setVal({...val, country: e.target.value})} />
                                </Col>
                                <Col>
                                    <Form.Label>Degree</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. Master's" onChange={(e) => setVal({...val, degree: e.target.value})} />
                                </Col>
                            </Row>
                        </Form.Group>
                        
                        <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Field of study</Form.Label>
                                <Form.Control type="text" placeholder="e.g. Engeneering" onChange={(e) => setVal({...val, field: e.target.value})}/>
                            </Col>


                            <Col>
                                <Form.Label>Graduation date</Form.Label>
                                <Form.Control type="text" placeholder="Month" onChange={(e) => setVal({...val, endMonth: e.target.value})}/>
                            </Col>

                            <Col>
                            <Form.Label>‎</Form.Label>
                                <Form.Control type="number" placeholder="Year" onChange={(e) => setVal({...val, endYear: e.target.value})}/>
                            </Col>
                        </Row>
                        </Form.Group>

                        
                        
                    </Form>
                    <Row>
                        <Col>
                        <Link to="/steptwotips">
                    <Button variant="primary" className='btn-back'>Back</Button>
                    </Link> 
                    </Col>
                    <Col>
                        <Link to='/stepthreelist'>
                        <Button variant="primary" className=' float-right' onClick={() => dispatch({type: 'ADD_EDUCATION', payload: val })}>
                            Add degree
                        </Button>
                        </Link>
                        </Col>
                        </Row>
                    </Col>
                    <Col>
                    <img src={educationimg} />
                   

                    </Col>
                </Row>
            </Container>
        </>
   )

}