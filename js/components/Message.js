export default function Message(message) {
	const messageData = message.data();

	return `
        <section class='card main-content__message'>
            <div class='card-body'>
                <h3>${messageData.title}</h3>
                <p>${messageData.content}</p>
                <img src="${messageData.imageUrl}"  class="img-thumbnail rounded float-left" width="200" height="200"/>
            </div>
            <section class='update-message'>
                <input class='update-message__messageTitle' type='text' placeholder='edit title' />
                <input class='update-message__messageBody' type='text' placeholder='edit content' />
                <input type='file' class='btn upload-group' id='file' />
                <button class='btn btn-primary photo-upload'>Edit</button>
                <input class='update-message__id' type='hidden' value="${message.id}" />
            </section>
        </section>
       
        `;
}
