import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import "./Education.css";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const educationData = [
    {
      icon: <FaGraduationCap />,
      title: "B.Tech – Computer Science Engineering",
      institute: "Dewan VS Institute of Engineering & Technology",
      duration: "2021 – 2025",
      desc: "Focused on computer science fundamentals, web development, and practical software engineering concepts with hands-on project work.",
    },
    {
      icon: <FaSchool />,
      title: "Senior Secondary (Science)",
      institute: "Jamuna Ram Memorial School (CBSE)",
      duration: "2020 – 2021",
      desc: "Studied Physics, Chemistry, and Mathematics, building strong analytical and problem-solving skills.",
    },
    {
      icon: <FaSchool />,
      title: "Secondary School",
      institute: "Suryabadan Vidyapeeth (CBSE)",
      duration: "2018 – 2019",
      desc: "Developed early interest in problem-solving and computer fundamentals.",
    },
  ];

  return (
    <section id="education" className="education" ref={ref}>
      <div className="container">
        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background</p>
        </motion.div>

        <div className="education-tree">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className={`education-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="education-icon">{item.icon}</div>

              <div className="education-content">
                <h3>{item.title}</h3>
                <span className="education-institute">{item.institute}</span>
                <span className="education-duration">{item.duration}</span>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
