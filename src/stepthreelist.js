
import TemplateOne from './img/templateone.jpg';
import TemplateTwo from './img/templatetwo.jpg';
import TemplateThree from './img/templatethree.jpg';
import { useSelector, useDispatch } from 'react-redux';
import experienceimg from './img/experience.PNG';
import { useEffect } from 'react';
import {Container, Col, Row, Button, Form, Card} from 'react-bootstrap';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';

export default function StepThreeList () {
    const counter = useSelector(state => state.addremoveeducationreducer.education)
    const dispatch = useDispatch();
    useEffect(() => console.log(counter))
    return (
        <>
            <h3>EXPERIENCE</h3>
            <p>List your work experience, from the most recent to the oldest.</p>
            <Container fluid>
                <Col>
                    {
                        counter.map((e,i) => {
                            return (
                                <Card>
                                   
                                  <Card.Title>{e.school}</Card.Title>
                                  <Card.Text>
                                  
                                  <Button className='btn-del-steptwo btn-danger float-right' onClick={() => dispatch({type: 'REMOVE_EDUCATION', payload: i })}><DeleteForeverIcon  /></Button>
                                  <Button className='float-right' ><EditIcon /></Button>
                                 
                                    <p>  {e.field}, {e.degree} </p>
                                    <p> finised {e.endMonth}, {e.endYear}</p>
                                    
                                    </Card.Text> 
                                </Card>
                            )
                        })
                    }
                    <Row>
                        <Col xs={10}><Link to='/stepthree' className='d-flex justify-content-center'><Button><AddIcon />Add another degree</Button></Link></Col>
                        <Col><Link to='/stepfourtips' className='float-right'><Button>Save and continue</Button></Link></Col>
                    </Row>
                    
                </Col>
            </Container>
        </>
    )
}