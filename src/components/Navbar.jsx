import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {

    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
    
            const sections = document.querySelectorAll("section");
    
            let current = "";
    
            sections.forEach((section) => {
    
                const sectionTop = section.offsetTop - 120;
                const sectionHeight = section.offsetHeight;
    
                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionTop + sectionHeight
                ) {
                    current = section.getAttribute("id");
                }
    
            });
    
            setActiveSection(current);
    
        };
    
        window.addEventListener("scroll", handleScroll);
    
        handleScroll();
    
        return () => window.removeEventListener("scroll", handleScroll);
    
    }, []);

    return (

<nav>

<h2>Salim Stephen</h2>

<div
    className="menu-icon"
    onClick={() => setMenuOpen(!menuOpen)}
>
    {menuOpen ? <FaTimes /> : <FaBars />}
</div>

<ul className={menuOpen ? "nav-links active" : "nav-links"}>

    <li>
        <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
        >
            Home
        </a>
    </li>

    <li>
        <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
        >
            About
        </a>
    </li>

    <li>
        <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
        >
            Skills
        </a>
    </li>

    <li>
        <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
        >
            Projects
        </a>
    </li>

    <li>
        <a
            href="#certifications"
            className={activeSection === "certifications" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
        >
            Certifications
        </a>
    </li>

    <li>
        <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
        >
            Contact
        </a>
    </li>

</ul>

</nav>

    );

}

export default Navbar;