import {Container, Col, Row, Button, Form, Dropdown, DropdownButton, Card} from 'react-bootstrap';
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
import axios from 'axios';
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


import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import StarIcon from '@material-ui/icons/Star';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

import ResumeOne from './resume-one';
import ResumeTwo from './resume-two';

const DoneResume = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'SET_CURRPAGE', payload: 6 });
        dispatch({type: 'SET_ALREADY', payload: 6})
    },[]);
   
    const pdata = useSelector(state => state.submitinforeducer[0]);
    const summary = useSelector(state => state.addsummaryreducer);
    const jobs = useSelector(state => state.addremovejobreducer.jobs);
    const education = useSelector(state => state.addremoveeducationreducer.education);
    const skills = useSelector(state => state.addremoveskillreducer);
    const template = useSelector(state => state.chosetemplatereducer);
    let allJobs = jobs.map((e,i) => {
        return (`
                  <li>${e.employer}, ${e.jobtitle} </li>
                  <li>${e.country}, ${e.city}</li>
                  <li class='lastLi'>${e.startMonth},${e.startYear} - ${e.endMonth},${e.endYear}</li>  
                `);
     }).join('');

     
     let allSchools = education.map((e,i) => {
         return (
             `
            <li>${e.school}, ${e.degree}, ${e.field} </li>
            <li>${e.country}, ${e.city}</li>
            <li class='lastLi'>${e.endMonth},${e.endYear}</li>
             `
         )
     }).join('');

     let allSkills = skills.map((e,i) => {
         console.log(e);
         if (e.skill && e.level) {
         return (
             `
             <li class='lastLi'>${e.skill}<span class='skill-level'>${e.level}</span> </li>
             `
         )}
        else if (e.skill && !e.level) {
            return (
                `
                <li class='lastLi'>${e.skill} </li>
                `
            )
        }
     }).filter(e => e).join('');

    const html = `<html>
    <head>
      <meta charset="utf8">
      <title>Resume</title>
      <style>
        body {
            line-height: 1.4;
            padding: 3em;
            font-family: "Merriweather", serif;
        }

       h1 {
        font-size: 1.4em;
        margin-bottom: 2em;
        text-transform: uppercase;
        font-weight: bold;
        padding-bottom: 0.28em;
        color: #1F70D2;
            }

        h2 {
        font-size: 1.29em;
        margin-bottom: 1em;
        text-transform: uppercase;
        font-weight: normal;
        border-bottom: 0.11em dotted;
        padding-bottom: 0.28em;
        padding-top: 10px;
            }

        li {
            list-style-type: none;
        }

        .icon-sm {
          
            max-width: 30px;
            max-height: 20px;
            width: auto;
            height: auto;
        }

        .lastLi {
            padding-bottom: 25px;
        }
        .skill-level {
            padding-left: 30px;
        }
      </style>
    </head>
    <body>
    <div>
    <div class = 'personal-info'>
        <h1>${pdata.fname} ${pdata.lname}</h1>
        <p> <img class='icon-sm' src='https://i.imgur.com/OsJ5Dir.png'> ${pdata.address}, ${pdata.zip}, ${pdata.city}, ${pdata.country}</p>
        <p>${pdata.email}, ${pdata.phone}</p>
    </div>

    <div class = 'summary'>
        <h2>Professional summary</h2>
        <p>${summary}</p>
    </div>
     
    
    <div class = 'jobs'>
        <h2>Employment history</h2>
        <ul>
        ${allJobs}
        </ul>
    </div>

    <div class = 'schools'>
        <h2>Education</h2>
        <ul>
        ${allSchools}
        </ul>
    </div>

    <div class = 'skills'>
        <h2>Skills</h2>
        <ul>
        ${allSkills}
        </ul>
    </div>

</div>
    </body>
  </html>`;

  const html2 = `<html>
    <head>
      <meta charset="utf8">
      <title>Resume</title>
      <style>
        body {
            line-height: 1.4;
            padding: 3em;
            font-family: "Merriweather", serif;
        }

       h1 {
        font-size: 1.4em;
        margin-bottom: 2em;
        text-transform: uppercase;
        font-weight: bold;
        padding-bottom: 0.28em;
        color: #1F70D2;
            }

        h2 {
        font-size: 1.29em;
        margin-bottom: 1em;
        text-transform: uppercase;
        font-weight: normal;
        border-bottom: 0.11em dotted;
        padding-bottom: 0.28em;
        padding-top: 10px;
            }

        li {
            list-style-type: none;
        }

        .icon-sm {
          
            max-width: 30px;
            max-height: 20px;
            width: auto;
            height: auto;
        }

        .lastLi {
            padding-bottom: 25px;
        }

      </style>
    </head>
    <body>
    <div>
    <div class = 'personal-info'>
        <h1>${pdata.fname} ${pdata.lname}</h2>
        <p> <img class='icon-sm' src='https://i.imgur.com/OsJ5Dir.png'> ${pdata.address}, ${pdata.zip}, ${pdata.city}, ${pdata.country}</p>
        <p>${pdata.email}, ${pdata.phone}</p>
    </div>

    <div class = 'summary'>
        <h2>Professional summary</h2>
        <p>${summary}</p>
    </div>
     
    
    <div class = 'jobs'>
        <h2>Employment history</h2>
        <ul>
        ${allJobs}
        </ul>
    </div>

    <div class = 'schools'>
        <h2>Education</h2>
        <ul>
        ${allSchools}
        </ul>
    </div>

    <div class = 'skills'>
        <h2>Skills</h2>
        <ul>
        ${allSkills}
        </ul>
    </div>

</div>
    </body>
  </html>`;

  const convert = () => {
    axios.post('http://localhost:3001/createpdf',{
            params: {
                html
            }
        }).then(res => console.log(res)).catch(err => console.log(err));
  }

    return (
        <>
        <Container fluid className='resume'>
        <Row>
            <Col>
                <Button onClick={() => convert()}>Download PDF</Button>
                <Button>Send PDF to e-mail</Button>
            </Col>
        </Row>
        <Row>
            <Col>
            <div className='resume-box'>
            {template == 1 ? <ResumeOne /> : <ResumeTwo /> }
            
        </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button>aaa</Button>
                <Button>bbb</Button>
            </Col>
        </Row>
        
        </Container>
        </>
        
        
    )
}


export default DoneResume