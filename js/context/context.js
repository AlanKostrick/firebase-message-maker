import firebase from '../config/firebase';

function getDatabaseCollectionContext() {
	const db = firebase.firestore();
	const messagesRef = db.collection('messages');
	return messagesRef;
}

function getDatabaseItemContext(messageId) {
	const db = firebase.firestore();
	const messagesRef = db.collection('messages').doc(messageId);
	return messagesRef;
}

function getMainContext() {
	const main = document.querySelector('.main');
	return main;
}

export default {
	getDatabaseCollectionContext,
	getDatabaseItemContext,
	getMainContext
};
