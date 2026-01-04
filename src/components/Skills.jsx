import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaGlobe, FaTools } from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaGlobe />,
      skills: [
        {
          name: "React.js",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "JavaScript (ES6+)",
          level: 88,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML5",
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3 / Tailwind CSS",
          level: 92,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
      ],
    },
    {
      title: "Backend & APIs",
      icon: <FaCode />,
      skills: [
        {
          name: "Node.js",
          level: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          level: 72,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "REST APIs",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: <FaTools />,
      skills: [
        {
          name: "Git & GitHub",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Postman",
          level: 80,
          icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
          name: "SQL / Databases",
          level: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Deployment (Netlify / Vercel)",
          level: 78,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies I use to build real-world web applications
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    skill={skill}
                    isInView={isInView}
                    delay={categoryIndex * 0.2 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ skill, isInView, delay }) => {
  return (
    <motion.div
      className="skill-item"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="skill-header">
        <img src={skill.icon} alt={skill.name} className="skill-icon" />
        <span className="skill-name">{skill.name}</span>
      </div>

      {/* <div className="skill-level">
        <motion.div
          className="skill-bar"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: delay + 0.3, duration: 1.5, ease: "easeOut" }}
        />
      </div> */}
    </motion.div>
  );
};

export default Skills;

