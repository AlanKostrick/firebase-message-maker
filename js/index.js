import auth from './auth/auth';
import header from './features/header';
import home from './features/home';
import messages from './features/messages';
import uploadImage from './features/uploadImage';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

pageBuild();

function pageBuild() {
	header.header();
	home.home();
	auth.login();
	auth.logout();
	auth.signup();
	messages.messages();
	uploadImage.uploadImage();
}
