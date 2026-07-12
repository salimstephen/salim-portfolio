import "./Projects.css";
import { FaPython, FaGithub } from "react-icons/fa";
import { SiPandas, SiScikitlearn } from "react-icons/si";
import MovieBanner from "../assets/movie_banner.png";
import { FaCheckCircle } from "react-icons/fa";

function Projects() {
    return (
        <section id="projects" className="projects">

            <div className="projects-container">

                <h2>Projects</h2>

                <div className="projects-grid">

                    <div className="project-card">

                        <img
                            src={MovieBanner}
                            alt="Movie Recommendation System"
                            className="project-image"
                        />

                        {/* Everything below the image is wrapped here */}
                        <div className="project-content">

                            <h3>Movie Recommendation System</h3>

                            <p className="project-description" >
                                Built a collaborative filtering movie recommendation
                                system using Python, Pandas, and Scikit-learn to
                                generate personalized movie suggestions based on
                                user rating behavior. Processed over 10 million
                                movie ratings and developed a recommendation engine
                                that helps users discover movies they are likely
                                to enjoy.
                            </p>

                            <div className="tech-stack">

                                <span>
                                    <FaPython /> Python
                                </span>

                                <span>
                                    <SiPandas /> Pandas
                                </span>

                                <span>
                                    <SiScikitlearn /> Scikit-learn
                                </span>

                                <span>
                                    <FaGithub /> GitHub
                                </span>

                            </div>
 <div className="project-overview">

    <h4>Project Overview</h4>

    <div className="overview-grid">

    <div className="overview-item">
    <FaCheckCircle className="overview-icon" />
    <span>Personalized Recommendations</span>
</div>

<div className="overview-item">
    <FaCheckCircle className="overview-icon" />
    <span>Collaborative Filtering</span>
</div>

<div className="overview-item">
    <FaCheckCircle className="overview-icon" />
    <span>Data Preprocessing</span>
</div>

<div className="overview-item">
    <FaCheckCircle className="overview-icon" />
    <span>Machine Learning</span>
</div>

<div className="overview-item">
    <FaCheckCircle className="overview-icon" />
    <span>Feature Engineering</span>
</div>

<div className="overview-item">
    <FaCheckCircle className="overview-icon" />
    <span>Python & Scikit-learn</span>
</div>

    </div>

</div>
<div className="project-status">

    <span className="status-label">Status</span>

    <span className="status-completed">
        ✔ Completed • Portfolio Project
    </span>

</div>

<div className="project-links">

  <a
    href="https://github.com/salimstephen/movie-recommendation-project"
    target="_blank"
    rel="noopener noreferrer"
    className="github-btn"
  >
    <FaGithub />
    View Code
  </a>

  <a
    href="#"
    className="demo-btn"
  >
    Live Demo
    <span className="coming-badge">Soon</span>
  </a>

</div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Projects;