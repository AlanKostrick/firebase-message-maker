import firebase from '../config/firebase';
import Messages from '../components/Messages';
import Message from '../components/Message';
import context from '../context/context';

function messages() {
	const messagesButton = document.querySelector('.nav-list__messages');
	messagesButton.addEventListener('click', () => {
		//get request
		context
			.getDatabaseCollectionContext()
			.get()
			.then(messages => {
				const auth = firebase.auth();
				auth.onAuthStateChanged(function(user) {
					if (user) {
						context.getMainContext().innerHTML = Messages(messages);
					} else {
						context.getMainContext().innerHTML = `
						<div class="jumbotron">
                        <h1 class="display-4">You need to log in!</h1>
                        <p class="lead">We value our content and our people, you can't just post without getting proper access.</p>
                        <hr class="my-4">
                        <p>In a bit smaller text...please remember we value our people, you can't just post without logging in.</p>
                        <p class="lead">
                            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </p>
                    </div>
						`;
					}
				});
				focusOnSingularMessage();
			});
	});
	postRequest();
	deleteRequest();
}

function focusOnSingularMessage() {
	context.getMainContext().addEventListener('click', function() {
		if (event.target.classList.contains('edit-message__submit')) {
			const messageId = event.target.parentElement.querySelector(
				'.delete-message__id'
			).value;

			context
				.getDatabaseItemContext(messageId)
				.get()
				.then(message => {
					context.getMainContext().innerHTML = Message(message);
				});
		}
	});
}

function postRequest() {
	context.getMainContext().addEventListener('click', () => {
		if (event.target.classList.contains('add-message__submit')) {
			const title = event.target.parentElement.querySelector(
				'#add-message__title'
			).value;
			const content = event.target.parentElement.querySelector(
				'#add-message__content'
			).value;

			context.getDatabaseCollectionContext().add({
				title: title,
				content: content,
				imageUrl:
          'https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg'
			});
			context
				.getDatabaseCollectionContext()
				.get()
				.then(messages => {
					context.getMainContext().innerHTML = Messages(messages);
				});
		}
	});
}

function deleteRequest() {
	context.getMainContext().addEventListener('click', () => {
		if (event.target.classList.contains('delete-message__submit')) {
			const messageId = event.target.parentElement.querySelector(
				'.delete-message__id'
			).value;
			context.getDatabaseItemContext(messageId).delete();

			context
				.getDatabaseCollectionContext()
				.get()
				.then(messages => {
					context.getMainContext().innerHTML = Messages(messages);
				});
		}
	});
}

export default {
	messages
};
