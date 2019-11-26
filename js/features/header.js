import Header from '../components/Header';

function header() {
	const header = document.querySelector('.header');
	header.innerHTML = Header();
}

export default {
	header
};
