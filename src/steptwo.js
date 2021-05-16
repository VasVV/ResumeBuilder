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
import experienceimg from './img/experience.PNG';

export default function StepTwo () {

    const dispatch = useDispatch();

    const [val, setVal] = useState({
        employer: '', jobtitle: '', city: '', country: '', startYear: '', startMonth: '', endYear: '', endMonth: '', desc: ''
    });

    return (
        <>
        <h3>EXPERIENCE</h3>
        <p>List your work experience, from the most recent to the oldest.</p>
            <Container fluid>
                <Row>
                    <Col xs={8}>
                        
                    <Form>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Employer</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. IBM" onChange={(e) => setVal({...val, employer: e.target.value})} />
                                </Col>
                                <Col>
                                    <Form.Label>Job title</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. Developer" onChange={(e) => setVal({...val, jobtitle: e.target.value})} />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. Barcelona" onChange={(e) => setVal({...val, city: e.target.value})} />
                                </Col>
                                <Col>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. Spain" onChange={(e) => setVal({...val, country: e.target.value})} />
                                </Col>
                            </Row>
                        </Form.Group>
                        
                        <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Start date</Form.Label>
                                <Form.Control type="text" placeholder="Month" onChange={(e) => setVal({...val, startMonth: e.target.value})}/>
                            </Col>

                            <Col>
                            <Form.Label>‎</Form.Label>
                                <Form.Control type="number" placeholder="Year" onChange={(e) => setVal({...val, startYear: e.target.value})}/>
                            </Col>

                            <Col>
                                <Form.Label>End date</Form.Label>
                                <Form.Control type="text" placeholder="Month" onChange={(e) => setVal({...val, endMonth: e.target.value})}/>
                            </Col>

                            <Col>
                            <Form.Label>‎</Form.Label>
                                <Form.Control type="number" placeholder="Year" onChange={(e) => setVal({...val, endYear: e.target.value})}/>
                            </Col>
                        </Row>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label>‎Job description</Form.Label>
                        <br />
                        <textarea className='job-desc-input' placeholder="e.g. Research, document, rate, or select alternatives for web architecture or technologies." onChange={(e) => setVal({...val, desc: e.target.value})}/>
                        </Form.Group>
                        
                        
                    </Form>
                    <Row>
                        <Col>
                        <Link to="/steptwotips">
                    <Button variant="primary" className='btn-back'>Back</Button>
                    </Link> 
                    </Col>
                    <Col>
                        <Link to='/steptwolist'>
                        <Button variant="primary" className=' float-right' onClick={() => dispatch({type: 'ADD_JOB', payload: val })}>
                            Add job
                        </Button>
                        </Link>
                        </Col>
                        </Row>
                    </Col>
                    <Col>
                    <img src={experienceimg} />
                   

                    </Col>
                </Row>
            </Container>
        </>

    )
}