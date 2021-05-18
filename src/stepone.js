import {Container, Col, Row, Button, Form, Alert} from 'react-bootstrap';
import {useState,useEffect} from 'react';
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

    useEffect(() => {
        dispatch({type: 'SET_CURRPAGE', payload: 1 });
        dispatch({type: 'SET_ALREADY', payload: 1})
    },[])

    

    const [val, setVal] = useState({
        fname: '', lname: '', address: '', city: '', zip: '', country: '', email: '', phone: ''
    });

    const [err, setErr] = useState(true);


    const checkFilled = () => {
        setErr(Object.values(val).some(e => !e))
    };

    useEffect(() => checkFilled())

    const next = () => {
        
        dispatch({type: 'SUBMIT_INFO', payload: val });
        dispatch({type: 'UPDATE_TIP', payload: {num: 0, prev: '/stepone', next: '/steptwo', img: 0} })
        
    }

    return (
        <div className='ext'>
            
        <h3>COMPLETE YOUR RESUME HEADING</h3>
                        <p>Employers will use this information to contact you.</p>
                        
            <Container fluid>
                <Row>
                    <Col xs={8} className='form-col'>
                    <Alert show={err} variant="danger">Please fill all fields to continue</Alert>
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
                    <Button variant="primary" className='btn-back' onClick= {()=>dispatch({type: 'UNSET_ALREADY', payload: 1})} >Back</Button>
                    </Link> 
                    </Col>
                    <Col>
                    <Link  to="/alltips">
                        <Button variant="primary" className=' float-right' onClick={() => next()} disabled={err}>
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
            </div>

    )
}