export default function Header() {
	return `
    <nav class="nav">
    <h1 class='bg-white rounded nav-logo'>MessageMaker</h1>
        <ul class='navbar navbar-expand-lg navbar-light bg-light  nav-list'>
            <li class='nav-link nav-list__home'>Home</li>
            <li class='nav-link nav-list__messages'>Messages</li>
            <li class='nav-link nav-list__signup' data-toggle="modal" data-target="#modalRegisterForm">Sign Up</li>
            <li class='nav-link nav-list__login' data-toggle="modal" data-target="#modalLoginForm" >Login</li>
            <li class='nav-link nav-list__logout' data-toggle="modal" data-target=".bs-example-modal-sm">Logout</li>
        </ul>
     </nav>
`;
}
