import {Container, Col, Row, Button} from 'react-bootstrap';
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
import chosetemplatereducer from './reducers/chosetemplate'

export default function ChoseTemplate() {


    const dispatch = useDispatch();
    
   


    return (
        <>
        <h1>CHOOSE YOUR RESUME TEMPLATE</h1>
        <Container fluid>
        <Row className='templateRow'>
            <Col>
            <div className="container zoom">

            <img src ={TemplateOne} className='zoom' />
            <Link to="/stepone"> <Button className='chosetemplatebtn' onClick={() => dispatch({type: 'CHOSE_TEMPLATE', payload: 1 })}>Choose this template</Button> </Link>
            </div> 
             </Col>
            <Col>
            <div className="container zoom">
            <img src ={TemplateTwo} className='zoom' />
            <Button className='chosetemplatebtn' onClick={() => dispatch({type: 'CHOSE_TEMPLATE', payload: 2 })}>Choose this template</Button>
            </div>
            </Col>
            <Col>
            <div className="container zoom">
            <img src ={TemplateThree} className='zoom' />
            <Button className='chosetemplatebtn' onClick={() => dispatch({type: 'CHOSE_TEMPLATE', payload: 3 })}>Choose this template</Button>
            </div>
            </Col>
        </Row>

        </Container>

        </>
    )
}