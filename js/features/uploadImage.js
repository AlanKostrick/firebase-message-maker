import firebase from '../config/firebase';
import Message from '../components/Message';
import context from '../context/context';

function uploadImage() {
	context.getMainContext().addEventListener('change', () => {
		const messageId = event.target.parentElement.querySelector(
			'.update-message__id'
		).value;
		const messageTitle = event.target.parentElement.querySelector(
			'.update-message__messageTitle'
		).value;
		const messageContent = event.target.parentElement.querySelector(
			'.update-message__messageBody'
		).value;
		const uploadBtn = document.querySelector('.photo-upload');
		uploadBtn.addEventListener('click', () => {
			const chooseFile = document.querySelector('#file');
			let selectedFile = chooseFile.files[0];
			let fileName = selectedFile.name;
			let storageRef = firebase.storage().ref('/images/' + fileName);
			let uploadTask = storageRef.put(selectedFile);

			uploadTask.on(
				'state_changed',
				function(snapshot) {
					var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
					case firebase.storage.TaskState.PAUSED: // or 'paused'
						console.log('Upload is paused');
						break;
					case firebase.storage.TaskState.RUNNING: // or 'running'
						console.log('Upload is running');
						break;
					}
				},
				function(error) {
					// Handle unsuccessful uploads
					console.log(error);
				},
				function() {
					// Handle successful uploads on complete
					// For instance, get the download URL: https://firebasestorage.googleapis.com/...
					uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
						const db = firebase.firestore();
						db.collection('messages')
							.doc(messageId)
							.update({
								title: messageTitle,
								content: messageContent,
								imageUrl: downloadURL
							});

						db.collection('messages')
							.doc(messageId)
							.get()
							.then(message => {
								context.getMainContext().innerHTML = Message(message);
							});

						console.log('File available at', downloadURL);
					});
				}
			);
		});
	});
}

export default {
	uploadImage
};
