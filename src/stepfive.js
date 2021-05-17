import {Container, Col, Row, Button, Form, Dropdown, DropdownButton, Card} from 'react-bootstrap';
import {useEffect, useState} from 'react';
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
import skillsimg from './img/skills.PNG';
import summaryImg from './img/summary.PNG';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function StepFive () {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'SET_CURRPAGE', payload: 5 });
        dispatch({type: 'SET_ALREADY', payload: 5})
    },[]);

    const back = () => {
        dispatch({type: 'UNSET_ALREADY', payload: 5});
        dispatch({type: 'UPDATE_TIP', payload: {num: 3, prev: '/stepfour', next: '/stepfive', img: 3}})
    }

    const [summary, setSummary] = useState('');
    return (
        <>
        <h3>PROFESSIONAL SUMMARY</h3>
        <p>Write a short summary telling more about yourself, your strengths and experience. Feel free to use our pre-written examples.</p>
        <Container fluid>
            <Row>
                <Col xs={8}><textarea className='summary-text' onChange ={(e) => setSummary(e.target.value)} /></Col>
                <Col><img src={summaryImg} /></Col>
            </Row>
            <Row>
                                <Col xs={7}><Link to='/alltips'><Button onClick= {()=>back()} >Back</Button> </Link></Col>
                                
                                <Col><Link to='/doneresume'><Button onClick={()=> dispatch({type: 'ADD_SUMMARY', payload: summary})}>Save and continue</Button></Link></Col>
                            </Row>
        </Container>
        </>
    )
}