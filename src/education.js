import {Container, Col, Row} from 'react-bootstrap';
import {useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


import { useSelector } from 'react-redux';




export default function Education() {

    const educationData = useSelector(state => state.addremoveeducationreducer.education); 
    useEffect(() => 
    console.log(educationData))
    return (
        <>
        <Container fluid>
            <Row>
                <Col>
                    <h2>Education</h2>
                </Col>
               
            </Row>
            {educationData.map(e => {
                return (
                    <Row>
            <Col>
                    <Row>{e.school}, {e.degree}, {e.field}</Row>
                    <Row> {e.city} {e.country}, {e.endMonth},{e.endYear}</Row>
            </Col>
            </Row>
                )
            })}
        
        
        
        </Container>
        </>
    )
}