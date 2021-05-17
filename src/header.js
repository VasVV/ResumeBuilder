import {Container, Col, Row, Button, Form, Dropdown, DropdownButton, Card, ListGroup} from 'react-bootstrap';
import {useEffect, useState, createRef} from 'react';
import ReactDOMServer from 'react-dom/server';
import {Link} from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ResumeStart from './img/resumestart.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pdf from "react-to-pdf";
import BuildResume from './img/buildresume.svg';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import DownloadResume from './img/downloadresume.svg';

import TemplateOne from './img/templateone.jpg';
import TemplateTwo from './img/templatetwo.jpg';
import TemplateThree from './img/templatethree.jpg';
import { useSelector, useDispatch } from 'react-redux';
import skillsimg from './img/skills.PNG';
import summaryImg from './img/summary.PNG';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


import Summary from './summary';
import Jobs from './jobs';
import Education from './education';
import Skills from './skills';
import { PDFViewer } from '@react-pdf/renderer';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export default function Header() {
    // const currpage = [[false, false], [true, true],[true, true],[true, true],[true, true],[false, false],[false, false]];
    const currpage = useSelector(state => state.currpagereducer);
    //[[current, already]]
    //[[false, true], [false, true], [true, true], [false, false] ]
    //style={{fill: "green"}}/>
    return (
        <Container fluid>
            <Row className='float-right'>
            <ListGroup horizontal>
            <ListGroup.Item>{currpage[0][1] ? <CheckBoxIcon style={{fill: currpage[0][0] ? "green" : ''}} /> : <CheckBoxOutlineBlankIcon />} <span style={{ color: currpage[0][0] ? 'green' : '', fontWeight: currpage[0][0] ? 'bold' : '' }}>  CHOOSE TEMPLATE </span> </ListGroup.Item>
            <ListGroup.Item>{currpage[1][1] ? <CheckBoxIcon style={{fill: currpage[1][0] ? "green" : ''}}/> : <CheckBoxOutlineBlankIcon />}<span style={{ color: currpage[1][0] ? 'green' : '', fontWeight: currpage[1][0] ? 'bold' : '' }}>PERSONAL INFO</span> </ListGroup.Item>
            <ListGroup.Item>{currpage[2][1] ? <CheckBoxIcon style={{fill: currpage[2][0] ? "green" : ''}}/> : <CheckBoxOutlineBlankIcon />} <span style={{ color: currpage[2][0] ? 'green' : '', fontWeight: currpage[2][0] ? 'bold' : '' }}>EXPERIENCE</span></ListGroup.Item>
            <ListGroup.Item>{currpage[3][1] ? <CheckBoxIcon style={{fill: currpage[3][0] ? "green" : ''}}/> : <CheckBoxOutlineBlankIcon />} <span style={{ color: currpage[3][0] ? 'green' : '', fontWeight: currpage[3][0] ? 'bold' : '' }}>EDUCATION</span></ListGroup.Item>
            <ListGroup.Item>{currpage[4][1] ? <CheckBoxIcon style={{fill: currpage[4][0] ? "green" : ''}}/> : <CheckBoxOutlineBlankIcon />} <span style={{ color: currpage[4][0] ? 'green' : '', fontWeight: currpage[4][0] ? 'bold' : '' }}>SKILLS</span></ListGroup.Item>
            <ListGroup.Item>{currpage[5][1] ? <CheckBoxIcon style={{fill: currpage[5][0] ? "green" : ''}}/> : <CheckBoxOutlineBlankIcon />} <span style={{ color: currpage[5][0] ? 'green' : '', fontWeight: currpage[5][0] ? 'bold' : '' }}>SUMMARY</span></ListGroup.Item>
            <ListGroup.Item>{currpage[6][1] ? <CheckBoxIcon style={{fill: currpage[6][0] ? "green" : ''}}/> : <CheckBoxOutlineBlankIcon />} <span style={{ color: currpage[6][0] ? 'green' : '', fontWeight: currpage[6][0] ? 'bold' : '' }}>REVIEW & DOWNLOAD</span></ListGroup.Item>
            </ListGroup>
            </Row>
        </Container>
    )
}
