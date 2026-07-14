import "./Hero.css";
import heroImage from "../assets/hero.png";

function Hero() {
    return (
        <section id="home" className="hero">

    <div className="hero-content">

        <div className="hero-badge">
            🟢 Available for Data Science Opportunities
        </div>

        <h1>

            Hi, I'm

            <span>Salim Stephen</span>

        </h1>

        <h2>
            Data Scientist
            <br />
            <span>Machine Learning Enthusiast</span>
        </h2>

        <p>

            I build practical data science solutions that transform data into meaningful insights.
            My focus is on machine learning, analytics, and solving real-world problems through
            hands-on projects. I'm continuously learning, improving my skills, and ready to
            contribute to impactful teams.

        </p>

        <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
                View My Work
            </a>

            <a href="/Stephen_Salim_CV.pdf" className="secondary-btn">
                Download CV
            </a>

        </div>

        <div className="hero-stats">

            <div>

                <h3>1+</h3>

                <p>Project</p>

            </div>

            <div>

                <h3>6</h3>

                <p>Certificates</p>

            </div>

            <div>

                <h3>100%</h3>

                <p>Committed to Learning</p>

            </div>

        </div>

    </div>

    <div className="hero-image">

        <img src={heroImage} alt="Salim Stephen" />

    </div>

</section>
    );
}

export default Hero;