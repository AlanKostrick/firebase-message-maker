export default function Message(message) {
	const messageData = message.data();

	return `
        <section class='card main-content__message'>
            <div class='card-body'>
                <h3>${messageData.title}</h3>
                <p>${messageData.content}</p>
                <img src="${messageData.imageUrl}" />
            </div>
        </section>
            
        <section class='update-message'>
            <input class='update-message__messageTitle' type='text' placeholder='edit title'>
            <input class='update-message__messageBody' type='text' placeholder='edit content'>
            <input type='file' class='upload-group' id='file' />
            <button class='photo-upload'>Upload File</button>
            <button class='update-message__submit'>Edit</button>
            <input class='update-message__id' type='hidden' value="${message.id}">
        </section>

    
        `;
}
