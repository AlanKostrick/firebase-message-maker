export default function Messages(messages) {
	return `
    <div>
    ${messages.docs.map(message => {
		const messageData = message.data();
		console.log(messageData);
	})}
    </div>
    `;
}
