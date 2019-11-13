import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBx_E2-f2_tic1txswzPEdVNLbHeRTtmcc',
	authDomain: 'message-maker-8d6b3.firebaseapp.com',
	databaseURL: 'https://message-maker-8d6b3.firebaseio.com',
	projectId: 'message-maker-8d6b3',
	storageBucket: 'message-maker-8d6b3.appspot.com',
	messagingSenderId: '1014649031852',
	appId: '1:1014649031852:web:8be071dbb2344cbf2f6309',
	measurementId: 'G-5RHHQSGXQ7'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
