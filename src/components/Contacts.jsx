import "./Contact.css";
import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {
    return (
        <section id="contact" className="contact">

        <div className="contact-container">
    
            <h2>Let's Build Something Meaningful</h2>
    
            <p className="contact-intro">
                I'm currently looking for opportunities in
                <span> Data Science</span>,
                <span> Machine Learning</span>, and
                <span> Data Analytics</span>.
                Whether you're hiring, collaborating on an exciting project,
                or simply want to connect, I'd love to hear from you.
            </p>
    
            <div className="contact-grid">
    
                {/* Email */}
    
                <div className="contact-card">
    
                    <div className="contact-icon">
                        <FaEnvelope />
                    </div>
    
                    <h3>Email</h3>
    
                    <a
                        href="mailto:otienostephen991@gmail.com"
                        className="contact-link"
                    >
                        otienostephen991@gmail.com
                    </a>
    
                    <small>Best way to reach me</small>
    
                </div>
    
                {/* LinkedIn */}
    
                <div className="contact-card">
    
                    <div className="contact-icon">
                        <FaLinkedin />
                    </div>
    
                    <h3>LinkedIn</h3>
    
                    <a
                        href="YOUR_LINKEDIN_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        Stephen Salim
                    </a>
    
                    <small>Let's connect professionally</small>
    
                </div>
    
                {/* GitHub */}
    
                <div className="contact-card">
    
                    <div className="contact-icon">
                        <FaGithub />
                    </div>
    
                    <h3>GitHub</h3>
    
                    <a
                        href="https://github.com/salimstephen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        github.com/salimstephen
                    </a>
    
                    <small>Explore my projects</small>
    
                </div>
    
                {/* Location */}
    
                <div className="contact-card">
    
                    <div className="contact-icon">
                        <FaMapMarkerAlt />
                    </div>
    
                    <h3>Location</h3>
    
                    <p>Nairobi, Kenya</p>
    
                    <small>Open to Remote & On-site</small>
    
                </div>
    
            </div>
    
            <div className="contact-button">
    
                <a href="mailto:otienostephen991@gmail.com">
                    Get In Touch →
                </a>
    
            </div>
    
        </div>
    
    </section>
    );
}

export default Contact;