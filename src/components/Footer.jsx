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

                <p>Data Science & Analytics Professional</p>

                <div className="footer-socials">

                    <a
                        href="https://github.com/salimstephen"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/otieno-stephen"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="mailto:otienostephen991@gmail.com"
                        aria-label="Email"
                    >
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