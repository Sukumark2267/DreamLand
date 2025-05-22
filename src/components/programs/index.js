'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './programs.css';

const programsData = [
  {
    title: 'ELITE ATHLETE TRAINING',
    description: 'Designed for athletes seeking peak performance with sport-specific training.',
    features: [
      'Personalized training plans',
      'Advanced performance metrics',
      'Nutrition coaching',
      'Recovery protocols',
    ],
  },
  {
    title: 'GROUP FITNESS',
    description: 'High-energy classes designed to challenge you in a team environment.',
    features: [
      'HIIT & Circuit Training',
      'Strength & Conditioning',
      'Mobility & Recovery',
      'Outdoor Bootcamps',
    ],
  },
  {
    title: 'DEDICATED FITNESS TRAINING',
    description: 'Our one-on-one coaching is designed just for you—tailored, focused, and results-driven.',
    features: [
      'Custom workout plans',
      'Form correction',
      'Accountability',
      'Progress tracking',
    ],
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="dark-section">
      <h2 className="section-title">OUR PROGRAMS</h2>
      <div className="programs-grid">
        {programsData.map((program, index) => (
          <motion.div
            key={index}
            className="program-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
              delay: 0.1,
            }}
            viewport={{ once: false, amount: 0.4 }} 
            whileHover={{ scale: 1.08 }}
          >
            <h4>{program.title}</h4>
            <p>{program.description}</p>
            <ul>
              {program.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="cta-button">Join Now</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
