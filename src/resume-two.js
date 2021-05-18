import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import {Container, Col, Row, Button, Form, Dropdown, DropdownButton, Card} from 'react-bootstrap';


import {useEffect, useState, createRef} from 'react';
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

import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import StarIcon from '@material-ui/icons/Star';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import ListAltIcon from '@material-ui/icons/ListAlt';


import './resume-two-styles.scoped.css';

 
  export default function ResumeTwo() {
    const pdata = useSelector(state => state.submitinforeducer);
    const summary = useSelector(state => state.addsummaryreducer);
    const jobs = useSelector(state => state.addremovejobreducer.jobs);
    const education = useSelector(state => state.addremoveeducationreducer.education);

    let skills = useSelector(state => state.addremoveskillreducer);

    console.log('skills')
    console.log(skills)
    return (
      <>
      <Row>
      <Col>
      <div class = 'personal-info'>
        <h1>{pdata.fname} {pdata.lname}</h1>
        <p> <LocationOnIcon color="primary"/> {pdata.address}, {pdata.zip}, {pdata.city}, {pdata.country}</p>
        <p><EmailIcon color="primary"/>{pdata.email} </p>
        <p><PhoneIcon color="primary"/>{pdata.phone}</p>
    </div>
        
    <div class = 'summary'>
        <h2>< ListAltIcon color="primary"/> Professional summary</h2>
        <p>{summary}</p>
    </div>
     
    
    <div class = 'jobs'>
        <h2><WorkIcon color="primary"/> Employment history</h2>
        <ul>
        {jobs.map((e,i) => {
        return (<>
                  <li>{e.employer}, {e.jobtitle} </li>
                  <li>{e.country}, {e.city}</li>
                  <li className="lastLi">{e.startMonth},{e.startYear} - {e.endMonth},{e.endYear}</li> 
                </> 
                );
     })}
        </ul>
    </div>

    <div class = 'schools'>
        <h2><SchoolIcon color="primary"/> Education</h2>
        <ul>
        {education.map((e,i) => {
         return (
             <>
            <li>{e.school}, {e.degree}, {e.field} </li>
            <li>{e.country}, {e.city}</li>
            <li className='lastLi'>{e.endMonth},{e.endYear}</li>
             </>
         )
     })}
        </ul>
    </div>
     </Col>
     <Col>
    <div class = 'skills'>
        <h2><ListAltIcon color='primary'/> Skills</h2>
        <ul>
        {
          skills.map(e => {
            switch(e.level) {
              case 'novice':
               return <li class='lastLi'>{e.skill}               <span class='skill-level'><StarIcon /></span> </li>
              case 'beginner':
                return <li class='lastLi'>{e.skill}               <span class='skill-level'><StarIcon /><StarIcon /></span> </li>
              case 'experienced':
                return <li class='lastLi'>{e.skill}               <span class='skill-level'><StarIcon /><StarIcon /><StarIcon /></span> </li>
              case 'advanced':
                return   <li class='lastLi'>{e.skill}               <span class='skill-level'><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span> </li>
              case 'expert':
                return    <li class='lastLi'>{e.skill}               <span class='skill-level'><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span> </li>
              default:
                return <li class='lastLi'>{e.skill}</li>
            }
          })
        }
        </ul>
    </div>
    </Col>
    </Row>
      </>  
      
      )
  };

  