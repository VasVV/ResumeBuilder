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



export default function PersonalInfo() {

    const personalData = useSelector(state => state.submitinforeducer[0]) 
    return (
        <>
        <Container fluid>
        <Row>
            <Col><h3>{personalData.fname} {personalData.lname}</h3></Col>
        </Row>
        <Row>
            <Col><p>{personalData.address}, {personalData.city}, {personalData.zip}, {personalData.country}</p></Col>
        </Row>
        <Row>
            <Col><p>{personalData.email}, {personalData.phone}</p></Col>
        </Row>
        
        </Container>
        </>
    )
}