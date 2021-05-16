import {Container, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ResumeStart from './img/resumestart.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

import BuildResume from './img/buildresume.svg';
import ChoseTemplate from './img/choosetemplate.svg';
import DownloadResume from './img/downloadresume.svg';


export default function Build() {


    return (
        <>
        <h1>BUILDING A PERFECT RESUME HAS NEVER BEEN THIS EASY!</h1>
        <Container fluid>
            <Row className='buildrow'>
                <Col>
                <Col>
                <div className='builddiv'><img src={BuildResume} className='buildimg' /> </div></Col>
                <Col>Choose a professional resume template</Col>
                </Col>
                <Col>
                <Col>
                <div className='builddiv'><img src={ChoseTemplate} className='buildimg'/></div></Col>
                <Col>Build your resume using our pre-written examples</Col>
                <div className='buildbtn'>
            <Link to="/chosetemplate">
            <Button variant="success">Build my Resume</Button>
            </Link>
            </div>
                </Col>
                <Col>
                <Col>
                <div className='builddiv'><img src={DownloadResume} className='buildimg'/></div></Col>
                <Col>Download your resume and start impressing employers</Col>
                </Col>
            </Row>
            
        </Container>
        
        </>
    )
}