import {Container, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import BuildResume from './img/buildresume.svg';
import ChoseTemplate from './img/choosetemplate.svg';
import DownloadResume from './img/downloadresume.svg';


export default function Build() {


    return (
        <>
        <div className='ext'>
        
        <Container fluid>
            <Row className='row-header'><h1>BUILDING A PERFECT RESUME HAS NEVER BEEN THIS EASY!</h1></Row>
            <Row className='buildrow'>
                <Col>
                <Col className='d-flex justify-content-center'>
                <div className='builddiv'><img src={BuildResume} className='buildimg' /> </div></Col>
                <Col className='text-center'>Choose a professional resume template</Col>
                </Col>
                <Col>
                <Col className='d-flex justify-content-center'>
                <div className='builddiv'><img src={ChoseTemplate} className='buildimg'/></div></Col>
                <Col className='text-center'>Build your resume using our pre-written examples</Col>
                
            
                </Col>
                <Col>
                <Col className='d-flex justify-content-center'>
                <div className='builddiv'><img src={DownloadResume} className='buildimg'/></div></Col>
                <Col className='text-center'>Download your resume and start impressing employers</Col>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col>
                <Link to="/chosetemplate">
            <Button variant="success" size="lg" className='big-btn' block >BUILD MY RESUME</Button>
            </Link>
                </Col>
                <Col>
                </Col>
            </Row>
            
        </Container>
        </div>
        </>
    )
}