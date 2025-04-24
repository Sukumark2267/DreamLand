// components/ProgramsSection.jsx
import React from 'react';

const programsData = [
  {
    title: 'ELITE ATHLETE TRAINING',
    description: 'For competitive athletes looking to take their performance to the next level with sport-specific programming.',
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
    title: 'PERSONAL TRAINING',
    description: 'One-on-one coaching tailored to your specific goals and needs.',
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
          <div key={index} className="program-card">
            <h4>{program.title}</h4>
            <p>{program.description}</p>
            <ul>
              {program.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
