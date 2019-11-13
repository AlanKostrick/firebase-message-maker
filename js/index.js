import Header from "./components/Header";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

pageBuild();

function pageBuild() {
  renderHeader();
}

function renderHeader() {
  const header = document.querySelector(".header");
  header.innerHTML = Header();
}
