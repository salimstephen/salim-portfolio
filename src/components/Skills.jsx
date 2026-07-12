import "./Skills.css";
import { FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiMysql
} from "react-icons/si";

import { TbChartHistogram } from "react-icons/tb";

function Skills (){
    return(
        <section id="skills" className="skills">
    <div className="skills-container">

        <h2>Technical Skills</h2>

        <div className="skills-grid">
        <div className="skill-card">
        <div className="skill-icon">
    <FaPython />
</div>
    <h3>Python</h3>
    <p>Programming Language</p>
</div>

<div className="skill-card">
    <div className="skill-icon">
        <SiPandas />
    </div>
    <h3>Pandas</h3>
    <p>Data Manipulation</p>
</div>

<div className="skill-card">
    <div className="skill-icon">
        <SiMysql />
    </div>
    <h3>SQL</h3>
    <p>Database Query Language</p>
</div>

<div className="skill-card">
    <div className="skill-icon">
        <SiNumpy />
    </div>
    <h3>NumPy</h3>
    <p>Numerical Computing</p>
</div>

<div className="skill-card">
    <div className="skill-icon">
        <TbChartHistogram />
    </div>
    <h3>Matplotlib</h3>
    <p>Data Visualization</p>
</div>

<div className="skill-card">
    <div className="skill-icon">
        <SiScikitlearn />
    </div>
    <h3>Scikit-learn</h3>
    <p>Machine Learning</p>
</div>

<div className="skill-card">
    <div className="skill-icon">
        <FaGitAlt />
    </div>
    <h3>Git</h3>
    <p>Version Control</p>
</div>

<div className="skill-card">
    <div className="skill-icon">
        <FaGithub />
    </div>
    <h3>GitHub</h3>
    <p>Code Collaboration</p>
</div>

<div className="skill-card">
    <div className="skill-icon">
        <SiJupyter />
    </div>
    <h3>Jupyter Notebook</h3>
    <p>Interactive Development</p>
</div>

<div className="skill-card">
    <div className="skill-icon">
    <VscVscode />
    </div>
    <h3>VS Code</h3>
    <p>Code Editor</p>
</div>
        </div>

    </div>
</section>
    )
}
export default Skills;