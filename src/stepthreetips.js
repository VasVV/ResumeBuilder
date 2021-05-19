import {Container, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import 'bootstrap/dist/css/bootstrap.min.css';


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

const allSections = ['experience', 'education', 'skills', 'summary']


export default function AllTips(props) {

    return (
  <>
        <h1>TIPS FOR YOUR {allSections[props.number]} SECTION</h1>
        <Container fluid>
        
        <Row>
            <Col xs={8}>
            {
                allTips.map((e,i) => {
                    if (i == props.number) {
                        <ul className='tipsul'>
                        <li><CheckCircleIcon /> {e[0]}</li>
                        <li> <CheckCircleIcon /> {e[1]}</li>
                        <li> <CheckCircleIcon /> {e[2]}</li>
                        <li> <CheckCircleIcon /> {e[3]}</li>
                    </ul>
                    }
                })
            }
            <Row>
                        <Col>
                        <Link to={props.back}>
                    <Button variant="primary" className='btn-back'>Back</Button>
                    </Link> 
                    </Col>
                    <Col>
                    <Link to={props.next}>
                        <Button variant="primary" className=' float-right'>
                            Next
                        </Button>
                    </Link>
                        </Col>
                        </Row>
            </Col>
            <Col>
            <img src={props.img} className='steptwoimg' />
            </Col>
            
        </Row>
        </Container>
  </>     
    )
}