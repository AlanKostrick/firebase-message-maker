import Home from '../components/Home';
import context from '../context/context';

function home() {
	const home = document.querySelector('.nav-list__home');
	home.addEventListener('click', () => {
		context.getMainContext().innerHTML = Home();
	});
}

export default {
	home
};
