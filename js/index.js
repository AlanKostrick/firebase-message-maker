import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Messages from './components/Messages';
import firebase from './config/firebase';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

pageBuild();

function pageBuild() {
	renderHeader();
	renderHome();
	renderSignup();
	renderLogin();
	renderLogout();
	renderMessages();
}

function renderHeader() {
	const header = document.querySelector('.header');
	header.innerHTML = Header();
}

function renderHome() {
	const home = document.querySelector('.nav-list__home');
	home.addEventListener('click', () => {
		const main = document.querySelector('.main');
		main.innerHTML = Home();
	});
}

function renderLogin() {
	const main = document.querySelector('.main');
	const loginButton = document.querySelector('.nav-list__login');
	loginButton.addEventListener('click', () => {
		main.innerHTML = Login();
	});

	main.addEventListener('click', () => {
		if (event.target.classList.contains('login-submit')) {
			const email = document.querySelector('#defaultForm-email').value;
			const password = document.querySelector('#defaultForm-pass').value;

			const auth = firebase.auth();
			auth.signInWithEmailAndPassword(email, password).then(user => {
				console.log(user);
			});
		}
	});
}

function renderLogout() {
	const main = document.querySelector('.main');
	const logoutButton = document.querySelector('.nav-list__logout');
	logoutButton.addEventListener('click', () => {
		main.innerHTML = Logout();
		main.addEventListener('click', () => {
			if (event.target.classList.contains('logout-submit')) {
				console.log('firing!');
				const auth = firebase.auth();
				auth.signOut();
			}
		});
	});
}

function renderSignup() {
	const signUpBtn = document.querySelector('.nav-list__signup');
	const main = document.querySelector('.main');
	signUpBtn.addEventListener('click', () => {
		main.innerHTML = Signup();
	});

	main.addEventListener('click', () => {
		if (event.target.classList.contains('signup-submit')) {
			const email = document.querySelector('#signupForm-email').value;
			const password = document.querySelector('#signupForm-pass').value;
			console.log(email, password);
			const auth = firebase.auth();
			auth.createUserWithEmailAndPassword(email, password).then(user => {
				console.log(user);
			});
		}
	});
}

function renderMessages() {
	const messagesButton = document.querySelector('.nav-list__messages');
	messagesButton.addEventListener('click', () => {
		const main = document.querySelector('.main');
		const db = firebase.firestore();

		//get request
		db.collection('messages')
			.get()
			.then(messages => {
				const auth = firebase.auth();
				auth.onAuthStateChanged(function(user) {
					if (user) {
						main.innerHTML = Messages(messages);
					} else {
						main.innerHTML = `
							<h2>You must be logged in!</h2>
						`;
					}
				});
			});

		//post request
		main.addEventListener('click', () => {
			if (event.target.classList.contains('add-message__submit')) {
				const title = document.querySelector('#add-message__title').value;
				const content = document.querySelector('#add-message__content').value;

				db.collection('messages').add({
					title: title,
					content: content
				});
				db.collection('messages')
					.get()
					.then(messages => {
						main.innerHTML = Messages(messages);
					});
			}
		});
	});

	//delete request
	const main = document.querySelector('.main');
	main.addEventListener('click', () => {
		if (event.target.classList.contains('delete-message__submit')) {
			const messageId = document.querySelector('.delete-message__id').value;
			const db = firebase.firestore();
			db.collection('messages')
				.doc(messageId)
				.delete();

			db.collection('messages')
				.get()
				.then(messages => {
					main.innerHTML = Messages(messages);
				});
		}
	});
}
