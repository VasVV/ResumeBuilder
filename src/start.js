import {Container, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ResumeStart from './img/resumestart.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Start() {

    return (
  <>
        <h1>Online resume builder</h1>
        <Container>
        
        <Row>
            <Col xs={6}>
            
            <ul className='startul'>
                <li><CheckCircleIcon /> Build a resume online</li>
                <li> <CheckCircleIcon /> Get it in pdf format</li>
            </ul>
            <Row>
            <Col></Col>
            <Col><Link to="/build">
            <Button variant="success">Build my Resume</Button>
            </Link></Col>
            </Row>
            
            
            </Col>
            <Col xs={6}>
                <img className='startimg' src={ResumeStart} />
            </Col>
        </Row>
        </Container>
  </>     
    )
}