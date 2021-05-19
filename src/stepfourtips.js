import {Container, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import 'bootstrap/dist/css/bootstrap.min.css';
import skillsimg from './img/skills.PNG';

export default function StepFourTips() {

    return (
  <>
        <h1>TIPS FOR YOUR SKILLS SECTION</h1>
        <Container fluid>
        
        <Row>
            <Col xs={8}>
            
            <ul className='tipsul'>
                <li><CheckCircleIcon /> List your top skills. The more relevant they are to the job you are applying for, the better.</li>
                <li> <CheckCircleIcon /> Use one or two keywords, not complete sentences. For example: "Project Management", "Online Marketing", "HTML", "SEO", etc.</li>
                <li> <CheckCircleIcon /> Make sure to include all important skills for the job you are applying for, even if you are not proficient on some of them.</li>
                <li> <CheckCircleIcon /> Keep it short. Try to showcase no more than 8 skills.</li>
            </ul>
            <Row>
                        <Col>
                        <Link to="/stepthreelist">
                    <Button variant="primary" className='btn-back'>Back</Button>
                    </Link> 
                    </Col>
                    <Col>
                    <Link to="/stepfour">
                        <Button variant="primary" className=' float-right'>
                            Next
                        </Button>
                    </Link>
                        </Col>
                        </Row>
            </Col>
            <Col>
            <img src={skillsimg} className='steptwoimg' />
            </Col>
            
        </Row>
        </Container>
  </>     
    )
}