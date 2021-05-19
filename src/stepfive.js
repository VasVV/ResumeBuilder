import {Container, Col, Row, Button, Alert} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch } from 'react-redux';

import summaryImg from './img/summary.PNG';


export default function StepFive () {

    const dispatch = useDispatch();
    const [err, setErr] = useState(true);

    useEffect(() => {
        dispatch({type: 'SET_CURRPAGE', payload: 5 });
        dispatch({type: 'SET_ALREADY', payload: 5})
    },[]);

    const back = () => {
        dispatch({type: 'UNSET_ALREADY', payload: 5});
        dispatch({type: 'UPDATE_TIP', payload: {num: 3, prev: '/stepfour', next: '/stepfive', img: 3}})
    }

    const [summary, setSummary] = useState('');

    useEffect(() => {
        if (summary) {
            setErr(false)
        }
    })

    return (
        <div className='ext'>
        
        <Container fluid>
        <h3>PROFESSIONAL SUMMARY</h3>
        <p>Write a short summary telling more about yourself, your strengths and experience. Feel free to use our pre-written examples.</p>
            <Row>
                
                <Col xs={8} className='textarea-col'>
                <Alert show={err} variant="danger">Please fill all fields to continue</Alert>
               
                    <textarea className='summary-text' onChange ={(e) => setSummary(e.target.value)} /></Col>
                <Col><img src={summaryImg} /></Col>
            </Row>
            <Row className='d-flex'>
                                <Col xs={6} className='padding-top justify-self-start'><Link to='/alltips'><Button onClick= {()=>back()} >Back</Button> </Link></Col>
                                
                                <Col className='padding-top'><Link to='/doneresume'><Button  onClick={()=> dispatch({type: 'ADD_SUMMARY', payload: summary})}>Save and continue</Button></Link></Col>
                            </Row>
        </Container>
        </div>
    )
}