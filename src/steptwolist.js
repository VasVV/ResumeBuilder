
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {Container, Col, Row, Button, Form, Card} from 'react-bootstrap';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';

export default function StepTwoList () {
    const counter = useSelector(state => state.addremovejobreducer.jobs)
    const dispatch = useDispatch();
    useEffect(() => console.log(counter))
    return (
        <div className='ext'>
            
            <Container fluid>
                <Col>
                <h3>EXPERIENCE</h3>
            <p>List your work experience, from the most recent to the oldest.</p>
                    {
                        counter.map((e,i) => {
                            return (
                                <Card>
                                   
                                  <Card.Title>{e.employer}</Card.Title>
                                  <Card.Text>
                                  
                                  <Button className='btn-del-steptwo btn-danger float-right' onClick={() => dispatch({type: 'REMOVE_JOB', payload: i })}><DeleteForeverIcon  /></Button>
                                 <Link to='/steptwo'><Button className='float-right' onClick={() => dispatch({type: 'CHANGE', payload: i})}><EditIcon /></Button></Link> 
                                 
                                    <p>  {e.city}, {e.country} </p>
                                    <p>{e.jobtitle} {e.startMonth}, {e.startYear} - {e.endMonth}, {e.endYear}</p>
                                    
                                    </Card.Text> 
                                </Card>
                            )
                        })
                    }
                    <Row className='padding-top'>
                        <Col > <Link to='/steptwo' className='d-flex justify-content-start'><Button><AddIcon />Add another job</Button></Link></Col>
                        <Col><Link to='/alltips' className='float-right'><Button onClick={()=> dispatch({type: 'UPDATE_TIP', payload: {num: 1, prev: '/steptwolist', next: '/stepthree', img: 1} })}>Save and continue</Button></Link></Col>
                    </Row>
                    
                </Col>
            </Container>
        </div>
    )
}