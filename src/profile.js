import {Button} from 'react-bootstrap';
import {useEffect, useState, createRef, Profiler} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import {firebase} from './firebase';

export default function Profile() {

    const pdata = useSelector(state => state.submitinforeducer);
    const summary = useSelector(state => state.addsummaryreducer);
    const jobs = useSelector(state => state.addremovejobreducer.jobs);
    const education = useSelector(state => state.addremoveeducationreducer.education);
    const skills = useSelector(state => state.addremoveskillreducer);
    const template = useSelector(state => state.chosetemplatereducer);

    const dispatch = useDispatch();
    const [resumes, setResumes] = useState([]);

    var user = firebase.auth().currentUser;

   

    const getResumes = async() => {
        const resumes = await firebase.firestore().collection('resumes').where('userId', '==', user.uid)
        .get()
        .then(data => data.docs.map(e => e.data()));

        setResumes(resumes);
    }

    const populateFromFirestore = async(i) => {
       let pdata = {
            fname: '', lname: '', address: '', city: '', zip: '', country: '', email: '', phone: ''
        };
        console.log(i)
        const currResume = resumes.find((e,index) => i == index); //{}
        const currJobs = currResume.jobs;
        const currSchools = currResume.education;
        console.log('SKILLS')
        const currSkills = currResume.skills;
        console.log(currSkills);
        const currSummary = currResume.summary;
        const currTemplate = currResume.template;
                console.log(currResume);
        pdata.fname = currResume.fname
        pdata.lname = currResume.lname
        pdata.address = currResume.address
        pdata.city = currResume.city
        pdata.zip = currResume.zip
        pdata.country = currResume.country
        pdata.email = currResume.email
        pdata.phone = currResume.phone
        dispatch({type: 'SUBMIT_INFO', payload: pdata });
        dispatch({type: 'ALL_JOBS', payload: currJobs });
        dispatch({type: 'ALL_SCHOOLS', payload: currSchools });
        dispatch({type: 'ADD_SKILL', payload: currSkills});
        dispatch({type: 'ADD_SUMMARY', payload: currSummary});
        dispatch({type: 'CHOSE_TEMPLATE', payload: currTemplate});
    }

    useEffect(() => {
        getResumes();
    },[])
    
    return (
        <div className='ext'>
        <h2 className='my-resumes profile-header'>My Profile</h2>
        <h2 className='my-resumes'>My resumes</h2>
            <ul className='my-resumes'>
        {
            resumes.map((e,i) => {
                return (
                    <li className='resume-list-li'>
                        {e.date}
                        <Link to='/doneresume'><Button className='link-btn' onClick={() => populateFromFirestore(i)}>Link to resume</Button></Link>
                    </li>
                )
            })
        }
        </ul>
        </div>
    )
}