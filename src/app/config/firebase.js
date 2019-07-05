import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCoLenYGatJ6dSEE7E4Je5uJZUqJgmOT8o",
    authDomain: "revents-245505.firebaseapp.com",
    databaseURL: "https://revents-245505.firebaseio.com",
    projectId: "revents-245505",
    storageBucket: "",
    messagingSenderId: "602967372789",
    appId: "1:602967372789:web:3ead432cc692c4c9"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

export default firebase;