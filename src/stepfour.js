import {Container, Col, Row, Button, Form, Dropdown, DropdownButton, Card, Alert} from 'react-bootstrap';
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

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function StepFour () {

    

    const dispatch = useDispatch();

    const [skills, setSkills] = useState([[],[],[]]);

    useEffect(() => {
        dispatch({type: 'SET_CURRPAGE', payload: 4 });
        dispatch({type: 'SET_ALREADY', payload: 4})
    },[])

    const [err,setErr] = useState(true);

    useEffect(() => {
        setErr(!skills.every(e => e.skill))
        console.log(skills)
        if (skills.length < 3) {
            setErr(true)
        }
    })
     
    const back = () => {

            dispatch({type: 'UPDATE_TIP', payload: {num: 2, prev: '/stepthreelist', next: '/stepfour', img: 2}});
            dispatch({type: 'UNSET_ALREADY', payload: 4});
        
    }

    


    const skillSelect = (index, skill) => {
      let valCopy =[...skills];
     valCopy[index] = {...valCopy[index], skill: skill};
     setSkills(valCopy);
    }

    const levelSelect = (e, index, level) => {
        e.preventDefault();
        const valCopy =[...skills];
        valCopy[index] = {...valCopy[index], level: level};
        setSkills(valCopy);
     }

     const removeSkill = index => {
         let skillsCopy = [...skills].filter((e,i) => i !== index);;
         setSkills(skillsCopy);
     }

     const next = () => {
        dispatch({type: 'ADD_SKILL', payload: skills});
        dispatch({type: 'UPDATE_TIP', payload: {num: 3, prev: '/stepfour', next: '/stepfive', img: 3} })
     }
    return (
        <div className='ext'>
        <h3>SKILLS</h3>
        <p>Highlight 6-8 of your top skills.</p>
        <Container fluid>
            <Row>
                <Col xs={8} className='form-col'>
                <Alert show={err} variant="danger">Make sure you've written at least 3 skills and filled the fields</Alert>

                    <Form >
                        {skills ? skills.map((e,i) => {
                            return (
                                <Card>
                                <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Skill</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. Marketing" onChange={(e) => skillSelect( i, e.target.value)} />
                                </Col>
                                <Col>
                                    <Form.Label>Level</Form.Label>
                                    <DropdownButton id="dropdown-item-button" title="Dropdown button">
                                        <Dropdown.ItemText as="button" name='novice'  onClick={(e) => levelSelect(e,i, e.target.name)} >Novice</Dropdown.ItemText>
                                        <Dropdown.Item as="button" name='beginner' onClick={(e) => levelSelect(e,i, e.target.name)}>Beginner</Dropdown.Item>
                                        <Dropdown.Item as="button" name='experienced' onClick={(e) => levelSelect(e,i, e.target.name)}>Experienced</Dropdown.Item>
                                        <Dropdown.Item as="button" name='advanced' onClick={(e) => levelSelect(e,i, e.target.name)}>Advanced</Dropdown.Item>
                                        <Dropdown.Item as="button" name='expert' onClick={(e) => levelSelect(e,i, e.target.name)}>Expert</Dropdown.Item>
                                        <Dropdown.Item as="button" name='false' onClick={(e) => levelSelect(e,i, e.target.name)}>Don't show level</Dropdown.Item>
                                    </DropdownButton>
                                    </Col>
                                    <Col>
                                    
                                    <Button className='btn-danger btn-delete-skill  float-right' onClick={() => removeSkill(i)}><DeleteForeverIcon  /></Button>
                                    </Col>
                               
                                
                                
                            </Row>
                            </Form.Group>
                            </Card>
                            )
                        }) : ''}
                            <Row className='padding-top'>
                                <Col><Link to='/alltips'><Button onClick= {()=>back()}>Back</Button></Link></Col>
                                <Col><Button onClick={() => setSkills([...skills, []])}>Add more skills</Button></Col>
                                <Col><Link to='/alltips' className='d-flex justify-content-end'><Button  onClick={() => next()} disabled={err}>Save and continue</Button></Link></Col>
                            </Row>
                       
                    </Form>
                    
                </Col>
                <Col>
                        <img src={skillsimg} />
                    </Col>
            </Row>
        </Container>
        </div>

    )
}