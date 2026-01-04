import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaLayerGroup, FaRocket } from "react-icons/fa";
import "./About.css";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: <FaCode />,
      text: "Clean, scalable React code with modern JavaScript",
    },
    {
      icon: <FaLayerGroup />,
      text: "Responsive UI and reusable component-based design",
    },
    {
      icon: <FaRocket />,
      text: "Focused on real-world, client-ready web applications",
    },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="about-content" variants={itemVariants}>
            {/* SMALL BADGE */}
            <div className="about-badge">React • Frontend Specialist</div>

            <motion.h2 className="section-title" variants={itemVariants}>
              About Me
            </motion.h2>

            <motion.p className="about-text" variants={itemVariants}>
              I’m a frontend-focused MERN developer who builds clean, fast, and
              user-friendly web applications using React and modern JavaScript.
            </motion.p>

            <motion.p className="about-text" variants={itemVariants}>
              I help startups, agencies, and small businesses turn ideas into
              functional websites and dashboards with a strong focus on
              usability, performance, and clean UI. I care about writing
              maintainable code and delivering interfaces that feel smooth to
              real users.
            </motion.p>

            {/* FEATURES */}
            <div className="about-features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  whileHover={{ y: -6 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let’s Work Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
