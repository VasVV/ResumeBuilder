import {Container, Row, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
export default function Header() {
    const currpage = useSelector(state => state.currpagereducer);
    return (
        <>
        <Container className='fixed-top' fluid>
        <h4>ResumeBuilder</h4>
        </Container>
        <Container className='fixed-top justify-content-end' fluid>
            
                
             <Row >   
                
            <ListGroup  horizontal>

            <ListGroup.Item>{currpage[0][1] ? <CheckBoxIcon style={{fill: currpage[0][0] ? "green" : ''}} /> : <CheckBoxOutlineBlankIcon />} <span style={{ color: currpage[0][0] ? 'green' : '', fontWeight: currpage[0][0] ? 'bold' : '' }}>  CHOOSE TEMPLATE </span> </ListGroup.Item>
            <ListGroup.Item>{currpage[1][1] ? <CheckBoxIcon style={{fill: currpage[1][0] ? "green" : ''}}/> : <CheckBoxOutlineBlankIcon />}<span style={{ color: currpage[1][0] ? 'green' : '', fontWeight: currpage[1][0] ? 'bold' : '' }}>PERSONAL INFO</span> </ListGroup.Item>
            <ListGroup.Item>{currpage[2][1] ? <CheckBoxIcon style={{fill: currpage[2][0] ? "green" : ''}}/> : <CheckBoxOutlineBlankIcon />} <span style={{ color: currpage[2][0] ? 'green' : '', fontWeight: currpage[2][0] ? 'bold' : '' }}>EXPERIENCE</span></ListGroup.Item>
            <ListGroup.Item>{currpage[3][1] ? <CheckBoxIcon style={{fill: currpage[3][0] ? "green" : ''}}/> : <CheckBoxOutlineBlankIcon />} <span style={{ color: currpage[3][0] ? 'green' : '', fontWeight: currpage[3][0] ? 'bold' : '' }}>EDUCATION</span></ListGroup.Item>
            <ListGroup.Item>{currpage[4][1] ? <CheckBoxIcon style={{fill: currpage[4][0] ? "green" : ''}}/> : <CheckBoxOutlineBlankIcon />} <span style={{ color: currpage[4][0] ? 'green' : '', fontWeight: currpage[4][0] ? 'bold' : '' }}>SKILLS</span></ListGroup.Item>
            <ListGroup.Item>{currpage[5][1] ? <CheckBoxIcon style={{fill: currpage[5][0] ? "green" : ''}}/> : <CheckBoxOutlineBlankIcon />} <span style={{ color: currpage[5][0] ? 'green' : '', fontWeight: currpage[5][0] ? 'bold' : '' }}>SUMMARY</span></ListGroup.Item>
            <ListGroup.Item>{currpage[6][1] ? <CheckBoxIcon style={{fill: currpage[6][0] ? "green" : ''}}/> : <CheckBoxOutlineBlankIcon />} <span style={{ color: currpage[6][0] ? 'green' : '', fontWeight: currpage[6][0] ? 'bold' : '' }}>REVIEW & DOWNLOAD</span></ListGroup.Item>
            </ListGroup>
            </Row>
           
        </Container>
    
    </>
    )
}
