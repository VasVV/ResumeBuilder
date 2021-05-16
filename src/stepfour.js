import {Container, Col, Row, Button, Form, Dropdown, DropdownButton} from 'react-bootstrap';
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

export default function StepFour () {

    const dispatch = useDispatch();

    const [skills, setSkills] = useState([[],[],[]]);

     
    

    


    const skillSelect = (index, skill) => {
      let valCopy =[...skills];
     valCopy[index] = {...valCopy[index], skill: skill};
    }

    const levelSelect = (e, index, level) => {
        e.preventDefault();
        const valCopy =[...skills];
        valCopy[index] = {...valCopy[index], level: level};
        setSkills(valCopy);
     }
    return (
        <>
        <h3>SKILLS</h3>
        <p>Highlight 6-8 of your top skills.</p>
        <Container fluid>
            <Row>
                <Col xs={8}>
                        
                    <Form>
                        {skills ? skills.map((e,i) => {
                            return (
                                <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Skill</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. Marketing" onChange={(e) => skillSelect( i, e.target.value)} />
                                </Col>
                                <Col>
                                    <Form.Label>Level</Form.Label>
                                    <DropdownButton id="dropdown-item-button" title="Dropdown button">
                                        <Dropdown.ItemText as="button" name='novice' onClick={(e) => levelSelect(e,i, e.target.name)} >Novice</Dropdown.ItemText>
                                        <Dropdown.Item as="button" name='beginner' onClick={(e) => levelSelect(e,i, e.target.name)}>Beginner</Dropdown.Item>
                                        <Dropdown.Item as="button" name='experienced' onClick={(e) => levelSelect(e,i, e.target.name)}>Experienced</Dropdown.Item>
                                        <Dropdown.Item as="button" name='advanced' onClick={(e) => levelSelect(e,i, e.target.name)}>Advanced</Dropdown.Item>
                                        <Dropdown.Item as="button" name='expert' onClick={(e) => levelSelect(e,i, e.target.name)}>Expert</Dropdown.Item>
                                        <Dropdown.Item as="button" name='false' onClick={(e) => levelSelect(e,i, e.target.name)}>Don't show level</Dropdown.Item>
                                        </DropdownButton>
                                </Col>
                            </Row>
                            </Form.Group>
                            )
                        }) : ''}
                            <Row>
                                <Col><Button>Back</Button></Col>
                                <Col><Button onClick={() => setSkills([...skills, []])}>Add more skills</Button></Col>
                                <Col><Button>Save and continue</Button></Col>
                            </Row>
                       
                    </Form>
                    
                </Col>
                <Col>
                        <img src={skillsimg} />
                    </Col>
            </Row>
        </Container>
        </>

    )
}