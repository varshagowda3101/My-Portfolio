import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    ["💻", "Programming Languages", "Python, C++, Java, SQL"],
    ["🤖", "AI / ML Concepts", "Machine Learning Fundamentals, Data Analysis, Neural Networks Basics"],
    ["🛠️", "Tools & IDEs", "Jupyter Notebook, VS Code, Git, GitHub"],
    ["🧠", "Core Concepts", "Data Structures & Algorithms, DBMS, OOPs"]
  ];

  const projects = [
    {
      title: "Predictive Machine Learning Models",
      description:
        "Developed predictive models using Python and Scikit-Learn algorithms to analyze and interpret tabular datasets.",
      tools: "Python • Scikit-Learn • Machine Learning"
    },
    {
      title: "Exploratory Data Analysis",
      description:
        "Performed comprehensive data analysis, data cleaning and preprocessing to improve data quality.",
      tools: "Python • Data Analysis • EDA"
    },
    {
      title: "Data Processing & Version Control",
      description:
        "Used Jupyter Notebooks and maintained version control using Git and GitHub.",
      tools: "Jupyter • Git • GitHub"
    }
  ];

  const education = [
    {
      year: "2023 – 2027",
      title: "Bachelor of Computer Applications (BCA)",
      subtitle: "Artificial Intelligence & Machine Learning",
      college: "Aditya Institute of Management and Studies, Bengaluru",
      status: "Currently Studying"
    },
    {
      year: "Completed",
      title: "Pre-University Course (PUC)",
      subtitle: "",
      college: "Government PU College",
      status: "Completed"
    },
    {
      year: "Completed",
      title: "SSLC / 10th Standard",
      subtitle: "",
      college: "Oxford English School",
      status: "Completed"
    }
  ];

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          VARSHA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark and light mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* HOME */}
      <section className="hero" id="home">

        <div className="hero-content">
          <p className="eyebrow">
            HELLO, WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            I'm <span>Varsha V</span>
          </h1>

          <h2>
            BCA Student | AI & Machine Learning
          </h2>

          <p className="hero-description">
            Motivated and detail-oriented BCA student specializing
            in Artificial Intelligence and Machine Learning.
            I am eager to apply my programming knowledge,
            analytical problem-solving skills and machine
            learning fundamentals to practical software
            development and data-driven projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Projects →
            </a>

            <a href="#contact" className="outline-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/varshagowda3101"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a href="mailto:varshavgowda04@gmail.com">
              Email ↗
            </a>
          </div>
        </div>

        {/* YOUR PROFILE PHOTO */}
        <div className="profile-container">
          <div className="profile-circle">
            <img
              src="/varsha bujji.jpeg"
              alt="Varsha V"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                console.error("Please check public/profile.png");
              }}
            />
          </div>

          <h3 className="profile-name">VARSHA V</h3>
          <p className="profile-caption">
            ✦ Aspiring AI & ML Professional
          </p>
        </div>

      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
          <span>My journey, goals and passion for technology.</span>
        </div>

        <div className="about-card">
          <div className="about-icon">👩‍💻</div>

          <div>
            <h3>Career Objective</h3>
            <p>
              Motivated and detail-oriented BCA student specializing
              in Artificial Intelligence and Machine Learning.
              Seeking opportunities to leverage strong programming
              knowledge, analytical problem-solving skills, and
              core machine learning fundamentals to contribute
              effectively to practical software development
              and data-driven projects.
            </p>
          </div>
        </div>

        <div className="about-highlights">
          <div className="highlight">
            <span>🎓</span>
            <h3>BCA Student</h3>
            <p>AI & Machine Learning</p>
          </div>

          <div className="highlight">
            <span>📍</span>
            <h3>Bengaluru</h3>
            <p>Karnataka, India</p>
          </div>

          <div className="highlight">
            <span>🏆</span>
            <h3>Certification</h3>
            <p>IBM AI Foundations</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p>MY EXPERTISE</p>
          <h2>Technical Skills</h2>
          <span>Technologies and concepts I have learned.</span>
        </div>

        <div className="skills-grid">
          {skills.map(([icon, title, items]) => (
            <div className="skill-card" key={title}>
              <div className="skill-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <div className="section-heading">
          <p>MY QUALIFICATIONS</p>
          <h2>Education</h2>
          <span>My academic journey.</span>
        </div>

        <div className="timeline">
          {education.map((item) => (
            <div className="timeline-card" key={item.title}>
              <p className="year">{item.year}</p>
              <h3>{item.title}</h3>

              {item.subtitle && <h4>{item.subtitle}</h4>}

              <p>{item.college}</p>

              <span className="education-status">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="section certificate-section">
        <div className="section-heading">
          <p>MY ACHIEVEMENTS</p>
          <h2>Certifications</h2>
        </div>

        <div className="certificate-card">
          <div className="certificate-icon">🏅</div>

          <div>
            <p className="certificate-label">IBM CERTIFICATION</p>
            <h3>IBM AI Foundations Certification</h3>
            <p>
              Earned core credentials in Artificial Intelligence
              concepts and methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-heading">
          <p>WHAT I'VE WORKED ON</p>
          <h2>Academic Projects</h2>
          <span>
            My learning and practical experience in AI & ML.
          </span>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={project.title}>
              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tools">
                {project.tools}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="section languages-section">
        <div className="section-heading">
          <p>COMMUNICATION</p>
          <h2>Languages</h2>
        </div>

        <div className="language-list">
          {["English", "Kannada", "Telugu", "Hindi"].map(
            (language) => (
              <span key={language}>{language}</span>
            )
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="section-heading">
          <p>LET'S CONNECT</p>
          <h2>Get In Touch</h2>
          <span>
            I'm open to learning, opportunities and collaboration.
          </span>
        </div>

        <div className="contact-grid">
          <a href="tel:+917204756322" className="contact-card">
            <span>📞</span>
            <h3>Phone</h3>
            <p>+91 7204756322</p>
          </a>

          <a
            href="mailto:varshavgowda04@gmail.com"
            className="contact-card"
          >
            <span>✉️</span>
            <h3>Email</h3>
            <p>varshavgowda04@gmail.com</p>
          </a>

          <a
            href="https://github.com/varshagowda3101"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span>💻</span>
            <h3>GitHub</h3>
            <p>varshagowda3101 ↗</p>
          </a>

          <div className="contact-card">
            <span>📍</span>
            <h3>Location</h3>
            <p>Bengaluru, Karnataka</p>
          </div>
        </div>

        <div className="contact-message">
          <h3>Let's Create Something Amazing!</h3>
          <p>Thank you for visiting my portfolio.</p>

          <a
            href="mailto:varshavgowda04@gmail.com"
            className="primary-btn"
          >
            Say Hello →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <h2>VARSHA<span>.</span></h2>
        <p>AI & ML Student | Aspiring Software Developer</p>
        <p>Designed with ❤️ using React</p>
        <p>© 2026 Varsha V. All Rights Reserved.</p>
      </footer>

    </div>
  );
}