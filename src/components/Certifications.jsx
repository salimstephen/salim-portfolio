import "./Certifications.css";

import {
    FaAward,
    FaPython,
    FaRobot,
    FaChartBar,
    FaUserGraduate,
    FaDatabase
} from "react-icons/fa";

import DataScience from "../assets/certificates/data-science.png";
import DataAnalytics from "../assets/certificates/data-analytics.png";
import Python from "../assets/certificates/python-certificate.png";
import AiCE from "../assets/certificates/alx-aice-essential.png";
import Foundation from "../assets/certificates/professional-foundation.png";
import StarterKit from "../assets/certificates/alx-ai-starter-kit.png";
import MachineLearning from "../assets/certificates/machine-learning.png";
import IBMDataFundamentals from "../assets/certificates/ibm-data-fundamentals.png";

function Certifications() {

    const certificates = [

        {
            title: "Data Science Professional Certificate",
            organization: "ALX Africa",
            skills: "Python • Data Analysis • Machine Learning",
            year: "2026",
            image: DataScience,
            icon: <FaAward />
        },

        {
            title: "Machine Learning Certificate",
            organization: "ALX Africa",
            skills: "Machine Learning • Python • Predictive Modeling",
            year: "2026",
            image: MachineLearning,
            icon: <FaRobot />
        },

        {
            title: "IBM Data Fundamentals",
            organization: "IBM SkillsBuild",
            skills: "Data Fundamentals • Analytics • Data Concepts",
            year: "2026",
            image: IBMDataFundamentals,
            icon: <FaDatabase />
        },

        {
            title: "Data Analytics Certificate",
            organization: "ALX Africa",
            skills: "Data Analysis • Excel • SQL",
            year: "2025",
            image: DataAnalytics,
            icon: <FaChartBar />
        },

        {
            title: "Python Certificate",
            organization: "Programming",
            skills: "Python • Programming",
            year: "2026",
            image: Python,
            icon: <FaPython />
        },

        {
            title: "AI Career Essentials",
            organization: "ALX Africa",
            skills: "Artificial Intelligence • Digital Skills",
            year: "2025",
            image: AiCE,
            icon: <FaRobot />
        },

        {
            title: "Professional Foundations",
            organization: "ALX Africa",
            skills: "Leadership • Communication • Professional Skills",
            year: "2025",
            image: Foundation,
            icon: <FaUserGraduate />
        },

        {
            title: "AI Starter Kit",
            organization: "ALX Africa",
            skills: "Artificial Intelligence • AI Fundamentals",
            year: "2025",
            image: StarterKit,
            icon: <FaRobot />
        }

    ];

    return (

        <section id="certifications" className="certifications">

            <div className="certifications-container">

                <h2>Professional Certifications</h2>

                <p className="certifications-intro">

                    My commitment to continuous learning has enabled me to build a strong
                    foundation in Data Science, Data Analytics, Python, Machine Learning,
                    Artificial Intelligence, and professional development.

                </p>

                <div className="certifications-summary">

                    🏆 <span>8 Professional Certifications</span>

                </div>

                <div className="certifications-grid">

                    {certificates.map((certificate, index) => (

                        <div className="certificate-card" key={index}>

                            <div className="certificate-icon">

                                {certificate.icon}

                            </div>

                            <h3>{certificate.title}</h3>

                            <p>{certificate.organization}</p>

                            <span>{certificate.year}</span>

                            <div className="certificate-skills">

                                {certificate.skills}

                            </div>

                            <a
                                href={certificate.image}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Credential →
                            </a>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Certifications;