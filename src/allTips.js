import {Container, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ResumeStart from './img/resumestart.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

import experienceimg from './img/experience.PNG'; //2
import educationimg from './img/education.PNG'; //3
import skillsimg from './img/skills.PNG'; //4

import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';

const allTips = [
    [//step two
         'Your most recent or current job should be listed first. Then, work in reverse chronological order, from your newest to your oldest jobs.',
                 'When describing your job duties, avoid using personal pronouns like “I, ” “me”, "my" etc.',
                 'Showcase your skills by using strong action verbs (“led,” “organized”, "coordinated"). Use figures to add value when possible. For example: "decreased production costs by 20%"',
                ' Use bullet points to list your job responsibilities in short, direct sentences.'
    ],
    [//step three
         'Start off by listing your degrees from most recent to oldest.',
                 'If you have still not graduated, list the date you expect to graduate.',
                 'High school graduation shouldn’t be mentioned on your resume unless you haven’t gone to college.',
                'Mention any scholarships, honors, awards, and professional certifications you have earned.'
    ],
    [//step four
        'List your top skills. The more relevant they are to the job you are applying for, the better',
               'Use one or two keywords, not complete sentences. For example: "Project Management", "Online Marketing", "HTML", "SEO", etc.',
                'Make sure to include all important skills for the job you are applying for, even if you are not proficient on some of them.',
                'Keep it short. Try to showcase no more than 8 skills.'
    ]
    [//step five
        'Keep your summary short and straight to the point. You can always elaborate during the interview. The optimal length for a professional summary is between 50 and 100 words.',
    'Tailor the summary to the job you are applying for. Show the employer exactly why you’re the best fit for this position.',
    'Be specific about your background, skills and goals.',
    'Remember, the best resume summary should quickly grab recruiters’ attention by shouting out: “Hey, I’m who you are looking for!”'
]
];

const allSections = ['experience', 'education', 'skills', 'summary'];

export default function AllTips() {

    const value = useSelector(state => state.tipsreducer)
    const [num, setNum] = useState('');

    useEffect(() => {
        if (!num){
        setNum(value)}
    })

    return (
  <>
        <h1>TIPS FOR YOUR {allSections[num.num]} SECTION</h1>
        <Container fluid>
        
        <Row>
            <Col xs={8}>
            
            {
               num ? allTips.map((e,i) => {
                   
                    if (i == num.num) {
                        {console.log(e)}
                       return (<ul className='tipsul'>
                            
                        <li><CheckCircleIcon /> {e[0]}</li>
                        <li> <CheckCircleIcon /> {e[1]}</li>
                        <li> <CheckCircleIcon /> {e[2]}</li>
                        <li> <CheckCircleIcon /> {e[3]}</li>
                    </ul>)
                    }
                })
            : ''}
            <Row>
                        <Col>
                        <Link to={num.prev}>
                    <Button variant="primary" className='btn-back'>Back</Button>
                    </Link> 
                    </Col>
                    <Col>
                    <Link to={num.next}>
                        <Button variant="primary" className=' float-right'>
                            Next
                        </Button>
                    </Link>
                        </Col>
                        </Row>
            </Col>
            <Col>
            <img src={experienceimg } className='steptwoimg' />
            </Col>
            
        </Row>
        </Container>
  </>     
    )
}