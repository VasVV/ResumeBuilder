import {Container, Col, Row, Button, Modal} from 'react-bootstrap';
import {useEffect, useState, createRef} from 'react';
import {Link, useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import ResumeOne from './resume-one';
import ResumeTwo from './resume-two';

import {firebase} from './firebase';

const DoneResume = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'SET_CURRPAGE', payload: 6 });
        dispatch({type: 'SET_ALREADY', payload: 6})
    },[]);

   
    const name = useSelector(state => state.submitinforeducer.fname);
    const pdata = useSelector(state => state.submitinforeducer);
    const summary = useSelector(state => state.addsummaryreducer);
    const jobs = useSelector(state => state.addremovejobreducer.jobs);
    const education = useSelector(state => state.addremoveeducationreducer.education);
    const skills = useSelector(state => state.addremoveskillreducer);
    const template = useSelector(state => state.chosetemplatereducer);
    console.log('skills');
    console.log(skills)
    let allJobs = jobs.map((e,i) => {
        return (`
                  <li>${e.employer}, ${e.jobtitle} </li>
                  <li>${e.country}, ${e.city}</li>
                  <li class='lastLi'>${e.startMonth},${e.startYear} - ${e.endMonth},${e.endYear}</li>  
                `);
     }).join('');

     
     let allSchools = education.map((e,i) => {
         return (
             `
            <li>${e.school}, ${e.degree}, ${e.field} </li>
            <li>${e.country}, ${e.city}</li>
            <li class='lastLi'>${e.endMonth},${e.endYear}</li>
             `
         )
     }).join('');

     let allSkills = skills.map((e,i) => {
         console.log(e);
         if (e.skill && e.level) {
         return (
             `
             <li class='lastLi'>${e.skill}<span class='skill-level'>${e.level}</span> </li>
             `
         )}
        else if (e.skill && !e.level) {
            return (
                `
                <li class='lastLi'>${e.skill} </li>
                `
            )
        }
     }).filter(e => e).join('');

     var allSkillsTwo = skills.map((e,i) => {
        console.log(e);
        if (e.skill && e.level) {
            switch(e.level) {
                case 'novice':
                 return `<li class='lastLi'>${e.skill}               <span class='skill-level'><img src='https://i.imgur.com/yWYGSIv.png'></span> </li>`
                case 'beginner':
                  return `<li class='lastLi'>${e.skill}               <span class='skill-level'><img src='https://i.imgur.com/yWYGSIv.png'><img src='https://i.imgur.com/yWYGSIv.png'></span> </li>`
                case 'experienced':
                  return `<li class='lastLi'>${e.skill}               <span class='skill-level'><img src='https://i.imgur.com/yWYGSIv.png'><img src='https://i.imgur.com/yWYGSIv.png'><img src='https://i.imgur.com/yWYGSIv.png'></span> </li>`
                case 'advanced':
                  return   `<li class='lastLi'>${e.skill}               <span class='skill-level'><img src='https://i.imgur.com/yWYGSIv.png'><img src='https://i.imgur.com/yWYGSIv.png'><img src='https://i.imgur.com/yWYGSIv.png'><img src='https://i.imgur.com/yWYGSIv.png'></span> </li>`
                case 'expert':
                  return    `<li class='lastLi'>${e.skill}               <span class='skill-level'><img src='https://i.imgur.com/yWYGSIv.png'><img src='https://i.imgur.com/yWYGSIv.png'><img src='https://i.imgur.com/yWYGSIv.png'><img src='https://i.imgur.com/yWYGSIv.png'><img src='https://i.imgur.com/yWYGSIv.png'></span> </li>`
                default:
                  return `<li class='lastLi'>${e.skill}</li>`
              }
        }
       else if (e.skill && !e.level) {
           return (
               `
               <li class='lastLi'>${e.skill} </li>
               `
           )
       }
    }).filter(e => e).join('');

    const html = [[`<html>
    <head>
      <meta charset="utf8">
      <title>Resume</title>
      <style>
        body {
            line-height: 1.4;
            padding: 3em;
            font-family: "Merriweather", serif;
        }

       h1 {
        font-size: 1.4em;
        margin-bottom: 2em;
        text-transform: uppercase;
        font-weight: bold;
        padding-bottom: 0.28em;
        color: #1F70D2;
            }

        h2 {
        font-size: 1.29em;
        margin-bottom: 1em;
        text-transform: uppercase;
        font-weight: normal;
        border-bottom: 0.11em dotted;
        padding-bottom: 0.28em;
        padding-top: 10px;
            }

        li {
            list-style-type: none;
        }

        .icon-sm {
          
            max-width: 30px;
            max-height: 20px;
            width: auto;
            height: auto;
        }

        .lastLi {
            padding-bottom: 25px;
        }
        .skill-level {
            padding-left: 30px;
        }
      </style>
    </head>
    <body>
    <div>
    <div class = 'personal-info'>
        <h1>${pdata.fname} ${pdata.lname}</h1>
        <p> <img class='icon-sm' src='https://i.imgur.com/OsJ5Dir.png'> ${pdata.address}, ${pdata.zip}, ${pdata.city}, ${pdata.country}</p>
        <p>${pdata.email}, ${pdata.phone}</p>
    </div>

    <div class = 'summary'>
        <h2>Professional summary</h2>
        <p>${summary}</p>
    </div>
     
    
    <div class = 'jobs'>
        <h2>Employment history</h2>
        <ul>
        ${allJobs}
        </ul>
    </div>

    <div class = 'schools'>
        <h2>Education</h2>
        <ul>
        ${allSchools}
        </ul>
    </div>

    <div class = 'skills'>
        <h2>Skills</h2>
        <ul>
        ${allSkills}
        </ul>
    </div>

</div>
    </body>
  </html>`],
  [`
  <html>
  <head>
  
  <style>
  * {
    box-sizing: border-box;
  }
  
  
  .column {
    float: left;
    width: 50%;
    padding: 10px;
   background-color: white !important
  }
  
  
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  body {
    line-height: 1.4;
    padding: 2em;
    font-family: "Merriweather", serif;
    
}

h1 {
    font-size: 2.86em;
    font-weight: bold;
}

h2 {
    font-size: 1.43em;
    line-height: 1;
    margin-bottom: 10px;
}

.icon {
    margin-right: 0.63em;
    font-size: 1.14em;
    background: #42A2E0;
    color: white;
    border: 0.25em solid #a1d1f0;
    border-radius: 50%;
    width: 2.51em;
    height: 2.51em;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

ul {
    list-style-type: none;
}

.skill-level {
    margin-left: 30px;
}

.skills {
    margin-top: 50px
}

.h-img {
    margin-right: 10px;
    height: 10px;
    width: 10px;
}

  </style>
  </head>
  <body>
  
  
  
  <div class="row">
    <div class="column" style="background-color:#aaa;">
      <div class = 'personal-info'>
          <h1>${pdata.fname} ${pdata.lname}</h1>
          <p> <img src='https://i.imgur.com/aPWIhKP.png' class='h-img'> ${pdata.address}, ${pdata.zip}, ${pdata.city}, ${pdata.country}</p>
          <p><img src='https://i.imgur.com/wTzudbS.png' class='h-img'>${pdata.email} </p>
          <p><img src='https://i.imgur.com/tDD5wzl.png' class='h-img'>${pdata.phone}</p>
      </div>
      
      <div class = 'summary'>
          <h2> <img src='https://i.imgur.com/GTe1HtH.png' class='h-img'> Professional summary</h2>
          <p>${summary}</p>
      </div>
      
      <div class = 'jobs'>
          <h2><img src='https://i.imgur.com/XfjmJe3.png' class='h-img'> Employment history</h2>
          <ul>
          ${allJobs}
          </ul>
      </div>
      
      <div class = 'schools'>
          <h2> <img src='https://i.imgur.com/ogCWK3H.png' class='h-img'> Education</h2>
          <ul>
          ${allSchools}
          </ul>
      </div>
    </div>
    <div class="column" style="background-color:#bbb;">
      <div class = 'skills'>
          <h2><img src='https://i.imgur.com/GTe1HtH.png' class='h-img'> Skills</h2>
          <ul>
          ${allSkillsTwo}
          </ul>
       </div>
    </div>
  </div>
  
  </body>
  </html>
  `]];

  const convert = template => {
      let param = html[template-1];
      console.log(param)
    axios.post('http://localhost:3001/createpdf',{
            params: {
                param
            }
        });
  }

  const sendResume = () => {
      let email = pdata.email;
      let params = {
          name,
          email
      }

      axios.post('http://localhost:3001/sendmail', {
          params
      })
  };

  //login modal

  let currUser = firebase.auth().currentUser;


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [err, setErr] = useState('');
  const isInvalid = password == '' || email == '';
  
  const [signUp, setSignUp] = useState(false);

  const handleLogin = async (e) => {
      e.preventDefault();
      
      try {
          await firebase.auth().signInWithEmailAndPassword(email, password);
          const date = new Date(Date.now()).toString();

        const resumeInfo = {
            ...pdata,
            summary,
            jobs: [...jobs],
            education: [...education],
            skills: [...skills],
            template,
            date
        }

        await firebase.firestore().collection('resumes').add({
            userId: currUser.uid,
            ...resumeInfo
        })
          history.push('/profile')
      } catch (error) {
          setEmail('');
          setPassword('');
          setErr(error.message)
      }

  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const createUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await createUser.user.updateProfile({
        displayName: pdata.fname
    });

    await firebase.firestore().collection('users').add({
        userId: createUser.user.uid,
        email
    })
    

};

    

    return (
        <>
        <>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        {!signUp ? <Modal.Body>
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
                    {err && <p color='red'>Check your username and password and try again</p>}
                    
           
                    E-mail: <input type='email' onChange = { ({target}) => setEmail(target.value)} />
                    <br />
                    Password: <input type='password' onChange = { ({target}) => setPassword(target.value)} />
                    
                    <button type='submit' disabled={isInvalid}>Login </button>
                </form>
                If you don't have an account <Button onClick={() => setSignUp(true)} >you can sign up here </Button>
        </Modal.Body> :  <Modal.Body>
        <form onSubmit={handleSignup}>
                <h2>Register</h2>
                    {err && <p color='red'>{err}</p>}

                    
                    E-mail: <input type='email' onChange = { ({target}) => setEmail(target.value)} />
                    <br />
                    Password: <input type='password' onChange = { ({target}) => setPassword(target.value)} />
                    <button type='submit' disabled={isInvalid}>Sign up </button>
                </form>
                If you already have an account <Button onClick={() => setSignUp(false)} >you can log in here </Button>
            </Modal.Body>}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>

        <Container fluid className='resume'>
        <Row className='resume-row'>
            <Col>
                <Button className=' padding-bottom' onClick={() => convert(template)}>Download Resume</Button>
                </Col>
                <Col className=' d-flex justify-content-center'>
                    {!currUser ? <Button className=' padding-bottom' onClick={() => handleShow()}>
                        Save to my profile
                    </Button> : 
                      <Link to='/profile'>  <Button className=' padding-bottom' >
                        Show my resumes
                    </Button></Link>
                    }
                </Col>
                <Col  className=' d-flex justify-content-end'>
                <Button className=' padding-bottom' onClick={() => sendResume()}>Send Resume to e-mail</Button>
                </Col>
        </Row>
        <Row>
            <Col>
            <div className='resume-box'>
            {template == 1 ? <ResumeOne /> : <ResumeTwo /> }
            
        </div>
            </Col>
        </Row>
        
        
        </Container>
        </>
        
        
    )
}


export default DoneResume