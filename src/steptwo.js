import {Container, Col, Row, Button, Form, Alert} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import experienceimg from './img/experience.PNG';

export default function StepTwo () {

    const jobs = useSelector(state => state.addremovejobreducer.jobs);
    const change = useSelector(state => state.changereducer);

   
    

    const back = () => {
        dispatch({type: 'UNSET_ALREADY', payload: 2});
        dispatch({type: 'UPDATE_TIP', payload: {num: 0, prev: '/stepone', next: '/steptwo', img: 0}}) 
    }

    useEffect(() => {
        dispatch({type: 'SET_CURRPAGE', payload: 2 });
        dispatch({type: 'SET_ALREADY', payload: 2});
        
         if (val) {   
        checkFilled()}
    });

    useEffect(() => {
        if (change.toString().length > 0) {
            populate();
        }
    }, [])

    const dispatch = useDispatch();

    const [err, setErr] = useState(true);

    const [val, setVal] = useState({
        employer: '', jobtitle: '', city: '', country: '', startYear: '', startMonth: '', endYear: '', endMonth: '', desc: ''
    });

    const populate = () => {
        let currJob = jobs[change];
        setVal(currJob);
        console.log('currJob')
        console.log(currJob)
    }
    
    


    const checkFilled = () => {
        setErr(Object.values(val).some(e => !e))
    };

    const endEdit = () => {
        dispatch({type: 'EDIT_JOB', payload: {index: change, val} });
        dispatch({type: 'CHANGE', payload: ''})
    }


    return (
        <div className='ext'>
             <h3>EXPERIENCE</h3>
            <p>List your work experience, from the most recent to the oldest.</p>
    <Container fluid>
        <Row>
            <Col xs={8} className='form-col'>
            <Alert show={err} variant="danger">Please fill all fields to continue</Alert>

            <Form>
                <Form.Group>
                    <Row>
                        <Col>
                        <Form.Label>Employer</Form.Label>
                        <Form.Control type="text" placeholder="e.g. IBM" value={val && val.employer ? val.employer : ''} onChange={(e)=> setVal({...val, employer: e.target.value})} />
                            </Col>
                            <Col>
                            <Form.Label>Job title</Form.Label>
                            <Form.Control type="text" placeholder="e.g. Developer" value={val && val.jobtitle ? val.jobtitle : '' } onChange={(e)=> setVal({...val, jobtitle: e.target.value})} />
                                </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="e.g. Barcelona" value={val && val.city ? val.city : ''} onChange={(e)=> setVal({...val, city: e.target.value})} />
                            </Col>
                            <Col>
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="e.g. Spain" value={val && val.country ? val.country : ''} onChange={(e)=> setVal({...val, country: e.target.value})} />
                                </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col>
                        <Form.Label>Start date</Form.Label>
                        <Form.Control type="text" placeholder="Month" value={val && val.startMonth ? val.startMonth  : ''} onChange={(e)=> setVal({...val, startMonth: e.target.value})}/>
                            </Col>

                            <Col>
                            <Form.Label>‎</Form.Label>
                            <Form.Control type="number" placeholder="Year" value={val && val.startYear ? val.startYear : ''} onChange={(e)=> setVal({...val, startYear: e.target.value})}/>
                                </Col>

                                <Col>
                                <Form.Label>End date</Form.Label>
                                <Form.Control type="text" placeholder="Month" value={val && val.endMonth ? val.endMonth : ''} onChange={(e)=> setVal({...val, endMonth: e.target.value})}/>
                                    </Col>

                                    <Col>
                                    <Form.Label>‎</Form.Label>
                                    <Form.Control type="number" placeholder="Year" value={val && val.endYear ? val.endYear : ''} onChange={(e)=> setVal({...val, endYear: e.target.value})}/>
                                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Form.Label>‎Job description</Form.Label>
                    <br />
                    <textarea className='job-desc-input' value={ val && val.desc ? val.desc : ''} placeholder="e.g. Research, document, rate, or select alternatives for web architecture or technologies." onChange={(e)=> setVal({...val, desc: e.target.value})}/>
                        </Form.Group>
                        
                        
                    </Form>
                    <Row>
                        <Col>
                        <Link to="/alltips">
                    <Button variant="primary" className='btn-back' onClick= {() => back()} >Back</Button>
                    </Link> 
                    </Col>
                    <Col>
                        <Link to='/steptwolist'>
                            {   
                                change.toString().length > 0 ? (<Button variant="primary" className=' float-right' onClick={() => endEdit()} disabled={err}>
                                Edit job
                            </Button>) : (<Button variant="primary" className=' float-right' onClick={() => dispatch({type: 'ADD_JOB', payload: val })} disabled={err}>
                            Add job
                        </Button>)
                            }

                        </Link>
                        </Col>
                        </Row>
                    </Col>
                    <Col>
                    <img src={experienceimg}   />
                   

                    </Col>
                </Row>
            </Container>
        </div>

    )
}