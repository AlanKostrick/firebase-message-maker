import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Messages from './components/Messages';
import firebase from './config/firebase';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

pageBuild();

function pageBuild() {
	renderHeader();
	renderHome();
	renderLogin();
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
	const loginButton = document.querySelector('.nav-list__login');
	loginButton.addEventListener('click', () => {
		const main = document.querySelector('.main');
		main.innerHTML = Login();
	});
}

function renderMessages() {
	const messagesButton = document.querySelector('.nav-list__messages');
	messagesButton.addEventListener('click', () => {
		const main = document.querySelector('.main');
		const db = firebase.firestore();
		db.collection('messages')
			.get()
			.then(messages => {
				main.innerHTML = Messages(messages);
			});
	});
}
