import {Container, Col, Row, Button, Form, Alert} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useSelector, useDispatch } from 'react-redux';
import educationimg from './img/education.PNG';

export default function StepThree () {

    const schools = useSelector(state => state.addremoveeducationreducer.education);
    const change = useSelector(state => state.changereducer);

    useEffect(() => {
        dispatch({type: 'SET_CURRPAGE', payload: 3 });
        dispatch({type: 'SET_ALREADY', payload: 3});
        if (val) {   
            checkFilled()
        }
        
    })

    const dispatch = useDispatch();
    const [val, setVal] = useState({
        school: '', city: '', country: '', degree: '', field: '', endYear: '', endMonth: ''
    });

    const back = () => {
        dispatch({type: 'UPDATE_TIP', payload: {num: 1, prev: '/steptwolist', next: '/stepthree', img: 1}});
        dispatch({type: 'UNSET_ALREADY', payload: 3});
    }

    const checkFilled = () => {
        setErr(Object.values(val).some(e => !e))
    };
    

    useEffect(() => {
        if (change.toString().length > 0) {
            populate();
        }
    }, []);

    const populate = () => {
        let currSchool = schools[change];
        setVal(currSchool);

    }

    

    const [err, setErr] = useState(true);

    const endEdit = () => {
        dispatch({type: 'EDIT_EDUCATION', payload: {index: change, val} });
        dispatch({type: 'CHANGE', payload: ''})
    }

   return (
    <div className='ext'>
    <h3>EDUCATION</h3>
        <p>Add information about your educational background.</p>
            <Container fluid>
                <Row>
                    <Col xs={8} className='form-col'>
                    <Alert show={err} variant="danger">Please fill all fields to continue</Alert>

                    <Form>
                        <Form.Group>
                            <Row>
                                <Col> 
                                    <Form.Label>School name</Form.Label>
                                    <Form.Control value={val && val.school ? val.school : ''} type="text" placeholder="e.g. Harvard" onChange={(e) => setVal({...val, school: e.target.value})} />
                                </Col>
                                <Col>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control value={val && val.city ? val.city : ''} type="text" placeholder="e.g. Barcelona" onChange={(e) => setVal({...val, city: e.target.value})} />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control value={val && val.country ? val.country : ''} type="text" placeholder="e.g. Spain" onChange={(e) => setVal({...val, country: e.target.value})} />
                                </Col>
                                <Col>
                                    <Form.Label>Degree</Form.Label>
                                    <Form.Control value={val && val.degree ? val.degree : ''} type="text" placeholder="e.g. Master's" onChange={(e) => setVal({...val, degree: e.target.value})} />
                                </Col>
                            </Row>
                        </Form.Group>
                        
                        <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Field of study</Form.Label>
                                <Form.Control value={val && val.field ? val.field : ''} type="text" placeholder="e.g. Engeneering" onChange={(e) => setVal({...val, field: e.target.value})}/>
                            </Col>


                            <Col>
                                <Form.Label>Graduation date</Form.Label>
                                <Form.Control value={val && val.endMonth ? val.endMonth: ''} type="text" placeholder="Month" onChange={(e) => setVal({...val, endMonth: e.target.value})}/>
                            </Col>

                            <Col>
                            <Form.Label>‎</Form.Label>
                                <Form.Control value={val && val.endYear ? val.endYear: ''} type="number" placeholder="Year" onChange={(e) => setVal({...val, endYear: e.target.value})}/>
                            </Col>
                        </Row>
                        </Form.Group>

                        
                        
                    </Form>
                    <Row>
                        <Col>
                        <Link to="/alltips">
                    <Button variant="primary" className='btn-back' onClick= {()=>back()}>Back</Button>
                    </Link> 
                    </Col>
                    <Col>
                        <Link to='/stepthreelist'>
                        {   
                                change.toString().length > 0 ? (<Button variant="primary" className=' float-right' onClick={() => endEdit()} disabled={err}>
                                Edit school
                            </Button>) : (<Button variant="primary" className=' float-right' onClick={() => dispatch({type: 'ADD_EDUCATION', payload: val })} disabled={err}>
                            Add school
                        </Button>)
                            }
                        </Link>
                        </Col>
                        </Row>
                    </Col>
                    <Col>
                    <img src={educationimg} />
                   

                    </Col>
                </Row>
            </Container>
        </div>
   )

}