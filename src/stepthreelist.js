
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
        <div className='ext'>
            <Container fluid>
                <Col>
            <h3>EXPERIENCE</h3>
            <p>List your degrees, from the most recent to the oldest.</p>
            
                    {
                        counter.map((e,i) => {
                            return (
                                <Card>
                                   
                                  <Card.Title>{e.school}</Card.Title>
                                  <Card.Text>
                                  
                                  <Button className='btn-del-steptwo btn-danger float-right' onClick={() => dispatch({type: 'REMOVE_EDUCATION', payload: i })}><DeleteForeverIcon  /></Button>
                                  <Link to='/stepthree'><Button className='float-right' onClick={() => dispatch({type: 'CHANGE', payload: i})}><EditIcon /></Button></Link>
                                 
                                    <p>  {e.field}, {e.degree} </p>
                                    <p> finished {e.endMonth}, {e.endYear}</p>
                                    
                                    </Card.Text> 
                                </Card>
                            )
                        })
                    }
                    

                    <Row className='padding-top'>
                        <Col > <Link to='/stepthree' className='d-flex justify-content-start'><Button>Add another degree</Button></Link></Col>
                        <Col><Link to='/alltips' className='float-right'><Button onClick={()=> dispatch({type: 'UPDATE_TIP', payload: {num: 2, prev: '/stepthreelist', next: '/stepfour', img: 2} })}>Save and continue</Button></Link></Col>
                    </Row>
                    
                </Col>
            </Container>
        </div>
    )
}