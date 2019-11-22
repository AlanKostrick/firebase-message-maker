import notebookImg from '../../assets/notebook.jpg';

export default function Home() {
	return `
    <figure class="figure">
        <img src="${notebookImg}">
        <figcaption class="figure-caption">A caption for the above image.</figcaption>
    </figure>
    `;
}
