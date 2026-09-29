import "./Skills.css";

import {
    FaPython,
    FaGitAlt,
    FaGithub,
    FaFileExcel,
    FaChartBar
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import {
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiJupyter,
    SiMysql
} from "react-icons/si";

import { TbChartHistogram } from "react-icons/tb";


function Skills() {
    return (
        <section id="skills" className="skills">

            <div className="skills-container">

                <h2>Technical Skills</h2>

                <div className="skills-grid">

                    {/* Python */}
                    <div className="skill-card">

                        <div className="skill-icon">
                            <FaPython />
                        </div>

                        <h3>Python</h3>
                        <p>Programming Language</p>

                    </div>


                    {/* Pandas */}
                    <div className="skill-card">

                        <div className="skill-icon">
                            <SiPandas />
                        </div>

                        <h3>Pandas</h3>
                        <p>Data Manipulation</p>

                    </div>


                    {/* SQL */}
                    <div className="skill-card">

                        <div className="skill-icon">
                            <SiMysql />
                        </div>

                        <h3>SQL</h3>
                        <p>Data Analysis & Querying</p>

                    </div>


                    {/* NumPy */}
                    <div className="skill-card">

                        <div className="skill-icon">
                            <SiNumpy />
                        </div>

                        <h3>NumPy</h3>
                        <p>Numerical Computing</p>

                    </div>


                    {/* Matplotlib */}
                    <div className="skill-card">

                        <div className="skill-icon">
                            <TbChartHistogram />
                        </div>

                        <h3>Matplotlib</h3>
                        <p>Data Visualization</p>

                    </div>


                    {/* Scikit-learn */}
                    <div className="skill-card">

                        <div className="skill-icon">
                            <SiScikitlearn />
                        </div>

                        <h3>Scikit-learn</h3>
                        <p>Machine Learning</p>

                    </div>


                    {/* Excel */}
                    <div className="skill-card">

                        <div className="skill-icon">
                            <FaFileExcel />
                        </div>

                        <h3>Excel</h3>
                        <p>Data Analysis & Reporting</p>

                    </div>


                    {/* Power BI */}
                    <div className="skill-card">

                        <div className="skill-icon">
                            <FaChartBar />
                        </div>

                        <h3>Power BI</h3>
                        <p>Business Intelligence</p>

                    </div>


                    {/* Git */}
                    <div className="skill-card">

                        <div className="skill-icon">
                            <FaGitAlt />
                        </div>

                        <h3>Git</h3>
                        <p>Version Control</p>

                    </div>


                    {/* GitHub */}
                    <div className="skill-card">

                        <div className="skill-icon">
                            <FaGithub />
                        </div>

                        <h3>GitHub</h3>
                        <p>Code Collaboration</p>

                    </div>


                    {/* Jupyter */}
                    <div className="skill-card">

                        <div className="skill-icon">
                            <SiJupyter />
                        </div>

                        <h3>Jupyter Notebook</h3>
                        <p>Interactive Development</p>

                    </div>


                    {/* VS Code */}
                    <div className="skill-card">

                        <div className="skill-icon">
                            <VscVscode />
                        </div>

                        <h3>VS Code</h3>
                        <p>Development Environment</p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Skills;