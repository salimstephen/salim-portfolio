import "./Hero.css";
import heroImage from "../assets/hero2.png";

function Hero() {
    return (
        <section id="home" className="hero">

            <div className="hero-content">

                <div className="hero-badge">
                    🟢 Open to Data & Analytics Opportunities
                </div>

                <h1>
                    Hi, I'm
                    <span>Stephen (Salim) Otieno</span>
                </h1>

                <h2>
                    Data Science & Analytics Professional
                    <br />
                    <span>Python • SQL • Power BI • Machine Learning</span>
                </h2>

                <p>
                    I build practical data science and analytics projects that
                    turn data into useful insights and solutions. My work spans
                    data analysis, visualization, and machine learning, with a
                    focus on developing practical skills through hands-on
                    projects and continuous learning.
                </p>

                <div className="hero-buttons">

                    <a href="#projects" className="primary-btn">
                        View My Work
                    </a>

                    <a
    href="/Salim_Stephen_Junior_Data_Scientist_CV.pdf"
    className="secondary-btn"
    target="_blank"
    rel="noopener noreferrer"
>
    Download CV
</a>

                </div>

                <div className="hero-stats">

                    <div>
                        <h3>3+</h3>
                        <p>Portfolio Projects</p>
                    </div>

                    <div>
                        <h3>Python</h3>
                        <p>Data Science</p>
                    </div>

                    <div>
                        <h3>SQL</h3>
                        <p>Data Analysis</p>
                    </div>

                </div>

            </div>

            <div className="hero-image">

                <img
                    src={heroImage}
                    alt="Stephen (Salim) Otieno"
                />

            </div>

        </section>
    );
}

export default Hero;