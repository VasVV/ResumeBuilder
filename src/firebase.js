import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 



const config = {
    apiKey: "AIzaSyATJpeyS9Vo2G7ed2VQpmVHi0u9WL3vTpA",
    authDomain: "resumebuilder-a1113.firebaseapp.com",
    projectId: "resumebuilder-a1113",
    storageBucket: "resumebuilder-a1113.appspot.com",
    messagingSenderId: "185625147448",
    appId: "1:185625147448:web:a10f3b5e963ec086f40ecd"
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;



export {firebase, FieldValue};