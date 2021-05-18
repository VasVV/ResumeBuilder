import {Container, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ResumeStart from './img/resumestart.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import BuildResume from './img/buildresume.svg';

import DownloadResume from './img/downloadresume.svg';

import TemplateOne from './img/templateone.jpg';
import TemplateTwo from './img/templatetwo.jpg';
import TemplateThree from './img/templatethree.jpg';
import { useSelector, useDispatch } from 'react-redux';
import chosetemplatereducer from './reducers/chosetemplate'
import { useEffect } from 'react';

export default function ChoseTemplate() {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'SET_CURRPAGE', payload: 0 });
        dispatch({type: 'SET_ALREADY', payload: 0})
    },[])

    
   


    return (
        <div className='ext'>
        <h1>CHOOSE YOUR RESUME TEMPLATE</h1>
        <Container fluid>
        <Row className='templateRow'>
                {[[1,TemplateOne],[2,TemplateTwo],[3,TemplateThree], [4, TemplateThree]].map((e,i) => {
                    return (
                        <Col>
                            <div className="container zoom">
                                <img src ={e[1]} className='zoom' />
{                                 i <= 1 ? <Link to="/stepone"> <Button className='chosetemplatebtn' onClick={() => dispatch({type: 'CHOSE_TEMPLATE', payload: e[0] })}>Choose this template</Button> </Link>
                                : <Button className='chosetemplatebtn'>Coming soon...</Button>
}                            </div> 
                        </Col>
                    )
                })}    
        </Row>
        </Container>
        </div>
    )
}