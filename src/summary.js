import {Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector} from 'react-redux';



export default function Summary() {
    const summaryData = useSelector(state => state.addsummaryreducer) 
    return (
        <>
        <Container fluid>
            <Row>
                <Col>
                    <h2>Professional Summary</h2>
                </Col>
            </Row>
        <Row>
            <Col><p>{summaryData}</p></Col>
        </Row>
        
        
        </Container>
        </>
    )
}