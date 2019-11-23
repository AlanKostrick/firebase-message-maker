export default messages => {
	return `
        <div>
        ${messages.docs
		.map(message => {
			const messageData = message.data();
			return `
                <section class='card main-content__messages'>
                  <div class='card-body'>
                    <h3>${messageData.title}</h3>
                    <p>${messageData.content}</p>
                    <input class='delete-message__id' type='hidden' value="${message.id}">
                    <button class='btn btn-danger delete-message__submit'>&times</button>
                    <button class='btn btn-info edit-message__submit'>...</button>
                  </div>
                 </section>
                `;
		})
		.join('')}
        </div>

        <section class='add-message'>
            <input type='text' placeholder= 'add title' id='add-message__title' />
            <input type='text' placeholder= 'add content' id='add-message__content' />
            <label class="upload-group">
            Upload File
            <input type="file" class="upload-group photo-upload">
            </label>
            <button class='add-message__submit'>Submit</button>
        </section>


        `;
};
