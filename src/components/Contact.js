import React from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaInstagram, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import resumePDF from '../assets/resume.pdf';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="tech-line w-full mb-16"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl tech-font font-bold text-center mb-16 tech-heading">INITIATE CONTACT</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl">Have a project, an idea, or just want to talk about movies? Let’s connect.</p>
        </div>
        <div className="flex justify-center space-x-8 mb-12">
          <a href="https://www.linkedin.com/in/anjosh007/" target="_blank" rel="noopener noreferrer" className="social-icon text-3xl"><FaLinkedin /></a>
          <a href="https://github.com/DHURANTHAM007" target="_blank" rel="noopener noreferrer" className="social-icon text-3xl"><FaGithub /></a>
          <a href="https://medium.com/@anjosh753" target="_blank" rel="noopener noreferrer" className="social-icon text-3xl"><FaMedium /></a>
          <a href="https://www.instagram.com/anjosh_007" target="_blank" rel="noopener noreferrer" className="social-icon text-3xl"><FaInstagram /></a>
          <a href="mailto:anjosh753@gmail.com" className="social-icon text-3xl"><FaEnvelope /></a>
        </div>
        <div className="text-center">
          <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3 rounded-md tech-font tracking-wider inline-flex items-center">
            <FaFileAlt className="mr-2" />
            <span>VIEW MY RESUME</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;