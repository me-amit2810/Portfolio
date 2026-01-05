import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEye, FaCode, FaRocket } from "react-icons/fa";
import "./Hero.css";
import profile from "../assets/profile.png"
import resume from "../assets/amit-resume.pdf"

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <section id="home" className="hero">
      {/* BACKGROUND */}
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <motion.div
          className="hero-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* CONTENT */}
          <div className="hero-content">
            <motion.div
              className="hero-badge"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <FaCode />
              <span>Frontend-Focused MERN Developer</span>
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              Hi, I'm <span className="highlight">Amit Kumar</span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={itemVariants}>
              I build fast, responsive, and scalable web applications using React
              and modern JavaScript.
              <br />
              {/* <br />
              I help startups, agencies, and small businesses turn their ideas
              into clean, user-friendly websites and dashboards that actually
              work — not just look good. */}
            </motion.p>

            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye />
                View Projects
              </motion.a>

              <motion.a
                href={resume}
                download
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                Download Resume
              </motion.a>
            </motion.div>

            {/* STATS */}
            {/* <motion.div className="hero-stats" variants={itemVariants}>
              <div className="stat">
                <span className="stat-number">Frontend</span>
                <span className="stat-label">React Specialist</span>
              </div>
              <div className="stat">
                <span className="stat-number">Clean</span>
                <span className="stat-label">UI & Code</span>
              </div>
              <div className="stat">
                <span className="stat-number">Responsive</span>
                <span className="stat-label">All Devices</span>
              </div>
            </motion.div> */}
          </div>

          {/* IMAGE */}
          <motion.div
            className="hero-image"
            variants={itemVariants}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
          >
            <div className="image-container">
              <motion.img
                src={profile}
                alt="Amit Kumar"
                className="profile-img"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="floating-card"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaRocket />
                <span>Building Real Products</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

