import "./Footer.css";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
    <div className="footer-container">

        <h3>Stephen Salim</h3>

        <p>Data Scientist | Machine Learning Enthusiast</p>

        <div className="footer-socials">

    <a
        href="https://github.com/salimstephen"
        target="_blank"
        rel="noopener noreferrer"
    >
        <FaGithub />
    </a>

    <a
        href="https://linkedin.com/in/otienostephen991"
        target="_blank"
        rel="noopener noreferrer"
    >
        <FaLinkedin />
    </a>

    <a href="mailto:otienostephen991@gmail.com">
        <FaEnvelope />
    </a>

</div>

        <p>
            © 2026 Stephen Salim. Built with React.
        </p>

    </div>
</footer>
    );
}

export default Footer;