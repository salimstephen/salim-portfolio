import "./Projects.css";
import {
    FaPython,
    FaGithub,
    FaCheckCircle,
    FaChartBar,
    FaDatabase,
    FaFileExcel
} from "react-icons/fa";

import { SiPandas } from "react-icons/si";

import MovieBanner from "../assets/movie_banner.png";
import FutureDSBanner from "../assets/future_ds_01_ecommerce_banner.png";
import MajiNdogoBanner from "../assets/maji_ndogo_water_analysis_banner.png";


function Projects() {
    return (
        <section id="projects" className="projects">

            <div className="projects-container">

                <h2>Projects</h2>

                <div className="projects-grid">

                    {/* =========================
                        MOVIE RECOMMENDATION SYSTEM
                    ========================= */}

                    <div className="project-card">

                        <img
                            src={MovieBanner}
                            alt="Movie Recommendation System"
                            className="project-image"
                        />

                        <div className="project-content">

                            <h3>Movie Recommendation System</h3>

                            <p className="project-description">
                                Built a collaborative filtering movie recommendation
                                system using Python, Pandas, and Scikit-learn to
                                generate personalized movie suggestions based on
                                user rating behavior. Processed over 10 million
                                movie ratings and developed a recommendation engine
                                for personalized movie discovery.
                            </p>

                            <div className="tech-stack">

                                <span>
                                    <FaPython /> Python
                                </span>

                                <span>
                                    <SiPandas /> Pandas
                                </span>

                                <span>
                                    <FaChartBar /> Scikit-learn
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

                                <span className="status-label">
                                    Status
                                </span>

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
                                    <span className="coming-badge">
                                        Soon
                                    </span>
                                </a>

                            </div>

                        </div>

                    </div>


                    {/* =========================
                        FUTURE DS 01
                    ========================= */}

                    <div className="project-card">

                        <img
                            src={FutureDSBanner}
                            alt="FUTURE DS 01 E-commerce Sales Analysis"
                            className="project-image"
                        />

                        <div className="project-content">

                            <h3>FUTURE_DS_01 — E-commerce Sales Analysis</h3>

                            <p className="project-description">
                                Developed an interactive e-commerce sales dashboard
                                during the Future Interns Data Science & Analytics
                                Internship. The project focuses on analyzing sales
                                performance, product categories, regional trends,
                                and business KPIs using Power BI and data
                                visualization techniques.
                            </p>

                            <div className="tech-stack">

                                <span>
                                    <FaChartBar /> Power BI
                                </span>

                                <span>
                                    <FaFileExcel /> Excel
                                </span>

                                <span>
                                    <FaChartBar /> Data Visualization
                                </span>

                                <span>
                                    <FaDatabase /> Data Analysis
                                </span>

                            </div>

                            <div className="project-overview">

                                <h4>Project Overview</h4>

                                <div className="overview-grid">

                                    <div className="overview-item">
                                        <FaCheckCircle className="overview-icon" />
                                        <span>E-commerce Sales Analysis</span>
                                    </div>

                                    <div className="overview-item">
                                        <FaCheckCircle className="overview-icon" />
                                        <span>Interactive Dashboard</span>
                                    </div>

                                    <div className="overview-item">
                                        <FaCheckCircle className="overview-icon" />
                                        <span>Business KPIs</span>
                                    </div>

                                    <div className="overview-item">
                                        <FaCheckCircle className="overview-icon" />
                                        <span>Sales Trends</span>
                                    </div>

                                    <div className="overview-item">
                                        <FaCheckCircle className="overview-icon" />
                                        <span>Data Visualization</span>
                                    </div>

                                    <div className="overview-item">
                                        <FaCheckCircle className="overview-icon" />
                                        <span>Business Insights</span>
                                    </div>

                                </div>

                            </div>

                            <div className="project-status">

                                <span className="status-label">
                                    Status
                                </span>

                                <span className="status-completed">
                                    ✔ Completed • Portfolio Project
                                </span>

                            </div>

                            <div className="project-links">

                                <a
                                    href="https://github.com/salimstephen/FUTURE_DS_01"
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="github-btn"
                                >
                                    <FaGithub />
                                    GitHub
                                </a>

                                <a
                                    href="#"
                                    className="demo-btn"
                                >
                                    Live Demo
                                    <span className="coming-badge">
                                        Soon
                                    </span>
                                </a>

                            </div>

                        </div>

                    </div>


                    {/* =========================
                        MAJI NDOGO
                    ========================= */}

                    <div className="project-card">

                        <img
                            src={MajiNdogoBanner}
                            alt="Maji Ndogo Water Access and Infrastructure Analysis"
                            className="project-image"
                        />

                        <div className="project-content">

                            <h3>Maji Ndogo Water Access & Infrastructure Analysis</h3>

                            <p className="project-description">
                                Analyzed water access and infrastructure data to
                                understand access patterns, queue times, and
                                infrastructure needs. Used SQL and Python-based
                                analysis to explore the data and identify areas
                                requiring further attention and prioritization.
                            </p>

                            <div className="tech-stack">

                                <span>
                                    <FaDatabase /> SQL
                                </span>

                                <span>
                                    <FaPython /> Python
                                </span>

                                <span>
                                    <SiPandas /> Pandas
                                </span>

                                <span>
                                    <FaDatabase /> MySQL
                                </span>

                            </div>

                            <div className="project-overview">

                                <h4>Project Overview</h4>

                                <div className="overview-grid">

                                    <div className="overview-item">
                                        <FaCheckCircle className="overview-icon" />
                                        <span>Water Access Analysis</span>
                                    </div>

                                    <div className="overview-item">
                                        <FaCheckCircle className="overview-icon" />
                                        <span>Infrastructure Analysis</span>
                                    </div>

                                    <div className="overview-item">
                                        <FaCheckCircle className="overview-icon" />
                                        <span>SQL Data Analysis</span>
                                    </div>

                                    <div className="overview-item">
                                        <FaCheckCircle className="overview-icon" />
                                        <span>Data Exploration</span>
                                    </div>

                                    <div className="overview-item">
                                        <FaCheckCircle className="overview-icon" />
                                        <span>Queue Time Analysis</span>
                                    </div>

                                    <div className="overview-item">
                                        <FaCheckCircle className="overview-icon" />
                                        <span>Infrastructure Prioritization</span>
                                    </div>

                                </div>

                            </div>

                            <div className="project-status">

                                <span className="status-label">
                                    Status
                                </span>

                                <span className="status-completed">
                                    ✔ Completed • Portfolio Project
                                </span>

                            </div>

                            <div className="project-links">

                                <a
                                    href="https://github.com/salimstephen/maji-ndogo-water-analysis"
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
                                    <span className="coming-badge">
                                        Soon
                                    </span>
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