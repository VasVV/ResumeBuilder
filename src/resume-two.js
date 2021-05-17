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
    const pdata = useSelector(state => state.submitinforeducer[0]);
    const summary = useSelector(state => state.addsummaryreducer);
    const jobs = useSelector(state => state.addremovejobreducer.jobs);
    const education = useSelector(state => state.addremoveeducationreducer.education);
    const skills = useSelector(state => state.addremoveskillreducer);
    return (
      <>
      <div class = 'personal-info'>
        <h1>{pdata.fname} {pdata.lname}</h1>
        <p> <LocationOnIcon /> {pdata.address}, {pdata.zip}, {pdata.city}, {pdata.country}</p>
        <p><EmailIcon />{pdata.email} </p>
        <p><PhoneIcon />{pdata.phone}</p>
    </div>
        <Col>
    <div class = 'summary'>
        <h2>< ListAltIcon /> Professional summary</h2>
        <p>{summary}</p>
    </div>
     
    
    <div class = 'jobs'>
        <h2><WorkIcon /> Employment history</h2>
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
        <h2><SchoolIcon /> Education</h2>
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
        <h2><ListAltIcon /> Skills</h2>
        <ul>
        {skills.map(e => {
          return (
            <>
            <li class='lastLi'>{e.skill}               <span class='skill-level'>{e.level}</span> </li>
            </>
          )
        })}
        </ul>
    </div>
    </Col>
      </>  
      
      )
  };

  