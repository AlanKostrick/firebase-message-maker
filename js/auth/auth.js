import Login from '../components/Login';
import Logout from '../components/Logout';
import Signup from '../components/Signup';
import firebase from '../config/firebase';
import context from '../context/context';

function login() {
	const loginButton = document.querySelector('.nav-list__login');
	loginButton.addEventListener('click', () => {
		context.getMainContext().innerHTML = Login();
	});

	context.getMainContext().addEventListener('click', () => {
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

function logout() {
	const logoutButton = document.querySelector('.nav-list__logout');
	logoutButton.addEventListener('click', () => {
		context.getMainContext().innerHTML = Logout();
		context.getMainContext().addEventListener('click', () => {
			if (event.target.classList.contains('logout-submit')) {
				console.log('firing!');
				const auth = firebase.auth();
				auth.signOut();
			}
		});
	});
}

function signup() {
	const signUpBtn = document.querySelector('.nav-list__signup');
	signUpBtn.addEventListener('click', () => {
		context.getMainContext().innerHTML = Signup();
	});

	context.getMainContext().addEventListener('click', () => {
		if (event.target.classList.contains('signup-submit')) {
			const email = document.querySelector('#signupForm-email').value;
			const password = document.querySelector('#signupForm-pass').value;

			const auth = firebase.auth();
			auth.createUserWithEmailAndPassword(email, password).then(user => {
				console.log(user);
			});
		}
	});
}

export default {
	login,
	logout,
	signup
};
