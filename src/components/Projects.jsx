import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'Next-Gen AI Learning Management System',
      description:
        'Developed an AI-powered LMS with personalized learning paths, analytics, auto-grading, summaries, and doubt-solving capabilities. Features intelligent content recommendations and real-time progress tracking.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      technologies: ['ReactJS', 'NodeJS', 'Express', 'Flask', 'Hugging Face API', 'Llama', 'MySQL', 'MongoDB', 'Docker'],
      liveLink: '#',
      githubLink: 'https://github.com/me-amit2810',
    },
    {
      title: 'Social Text Sentiment & Emotion Analysis',
      description:
        'Built an NLP system analyzing 100K+ tweets with 85% accuracy for brand and trend monitoring. Features real-time sentiment analysis, emotion detection, and comprehensive analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['Python', 'Flask', 'NLP Models', 'Hugging Face Transformers'],
      liveLink: '#',
      githubLink: 'https://github.com/me-amit2810',
    },
    {
      title: 'Interactive Front-End Projects',
      description:
        'Created multiple responsive web applications including BMI Calculator, Color Switcher, Digital Clock, Virtual Keyboard, and Number Guessing Game. Focused on DOM manipulation, events, and interactive UI design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS'],
      liveLink: '#',
      githubLink: 'https://github.com/me-amit2810',
    },
  ];

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isInView }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
        <motion.div
          className="project-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="project-links">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt />
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;


