'use client';
import { useLayoutEffect } from 'react';
import './programs.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programsData = [
  {
    title: 'ONE ON ONE',
    description: 'Personalized coaching sessions with focused attention on form, technique, and personal goals in a private setting.',
    features: [
      'Tailored workout sessions',
      'Real-time form correction',
      'Goal-specific planning',
      'Progress accountability',
      'Price: $70/hour',
    ],
  },
  {
    title: 'WEIGHT LOSS PROGRAM',
    description: 'A 12-week structured transformation program with guided workouts and nutrition advice to help you burn fat effectively.',
    features: [
      '12-week complete program',
      'Fat-burning workout routines',
      'Nutritional guidance',
      'Motivational coaching',
      'Price: $750/12 weeks',
    ],
  },
  {
    title: 'POST REHABILITATION TRAINING',
    description: 'Specialized sessions focused on safe recovery and rebuilding strength after injury with professional guidance.',
    features: [
      'Customized recovery workouts',
      'Rehabilitation-focused routines',
      'Mobility enhancement',
      'Strength rebuilding',
      'Price: $80/session',
    ],
  },
];

const ProgramsSection = () => {
//         gsap.from(".card", {
//             opacity: 0,
//             x: (i) => -200 * (i + 3),
//             duration: 2,
//             stagger: 1,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: ".Aboutsection2",
//               start: "top 10%",
//               end: "bottom 30%",
//               scrub: true,
//               markers: true,
//               toggleActions: "play none none reverse",
//               pin: true,
//         },
//       });
//     });
  
//     return () => ctx.revert();
// }, []);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".program-card");
  
      gsap.from(".program-card", {
        opacity: 0,
        x: -150,
        duration: 0.5,
        ease: "power2.out",
        stagger: 1,
        scrollTrigger: {
          trigger: ".program-card",
          start: "top 80%",
          scroller: "body",         
          end: "+=0",
          scrub: 3,
          markers: false,
          toggleActions: "play none none reverse",
          pin: true,
        },
      });
  });
      
    return () => ctx.revert();
  }, []);
  


  return (
    <section id="programs" className="dark-section">
      <h2 className="section-title" id='ourprograms'>OUR PROGRAMS</h2>
      <div className="programs-wrapper">
      <div className="programs-grid">
        {programsData.map((program, index) => (
          <div key={index} className="program-card">
            <h4>{program.title}</h4>
            <p>{program.description}</p>
            <br/>
            <ul>
              {program.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="cta-button" onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }}}>Join Now</button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
