import "./Certifications.css";

import {
    FaAward,
    FaPython,
    FaRobot,
    FaChartBar,
    FaUserGraduate
} from "react-icons/fa";

import DataScience from "../assets/certificates/data-science.png";
import DataAnalytics from "../assets/certificates/data-analytics.png";
import Python from "../assets/certificates/python-certificate.png";
import AiCE from "../assets/certificates/alx-aice-essential.png";
import Foundation from "../assets/certificates/professional-foundation.png";
import StarterKit from "../assets/certificates/alx-ai-starter-kit.png";

function Certifications() {

    const certificates = [

        {
            title: "Data Science Professional Certificate",
            organization: "ALX Africa",
            skills: "Python • Machine Learning • Data Analysis",
            year: "2026",
            image: DataScience,
            icon: <FaAward />
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
            skills: "Artificial Intelligence",
            year: "2025",
            image: AiCE,
            icon: <FaRobot />
        },

        {
            title: "Professional Foundations",
            organization: "ALX Africa",
            skills: "Leadership • Communication",
            year: "2025",
            image: Foundation,
            icon: <FaUserGraduate />
        },

        {
            title: "AI Starter Kit",
            organization: "ALX Africa",
            skills: "Artificial Intelligence",
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

My commitment to continuous learning has enabled me to build a strong foundation in
Data Science, Data Analytics, Python, Artificial Intelligence, and Professional Development.

</p>

<div className="certifications-summary">

🏆 <span>6 Professional Certifications</span>

</div>

<div className="certifications-grid">

{certificates.map((certificate,index)=>(

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