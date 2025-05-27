import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "/images/white-hammer.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <img id="logo" src={logo} alt="Thortech Logo" />
        <h1>Thortech</h1>
        <a href="#">Contact Us</a>
      </header>
      <div className="examples">
        <h1>All your website needs</h1>
      </div>
      <div className="reviews">
        <h1>What people say</h1>
        {/* jsx here */}
      </div>
      <div>
        <h2>Thortech LLC</h2>
      </div>
      <div className="socials">
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61576092674965"
          target="_blank"
        >
          <FontAwesomeIcon icon={faSquareFacebook} />
        </a>
        <a href="https://www.youtube.com/@Thortech117" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <footer>
        <hr></hr>
        <a href="#">Hire Us</a>
        <a href="#">Contact Us</a>
      </footer>
    </>
  );
}

export default App;
