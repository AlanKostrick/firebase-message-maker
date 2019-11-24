import Login from '../components/Login';
import Logout from '../components/Logout';
import Signup from '../components/Signup';
import firebase from '../config/firebase';

function login() {
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

function logout() {
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

function signup() {
	const signUpBtn = document.querySelector('.nav-list__signup');
	const main = document.querySelector('.main');
	signUpBtn.addEventListener('click', () => {
		main.innerHTML = Signup();
	});

	main.addEventListener('click', () => {
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
