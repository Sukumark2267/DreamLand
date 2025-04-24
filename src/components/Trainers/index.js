// components/TrainersSection.jsx
import React from 'react';
import Image from 'next/image';

const trainers = [
  {
    name: 'MARCUS JOHNSON',
    title: 'Strength & Conditioning Specialist',
    bio: 'With 10+ years coaching athletes, Marcus specializes in power development and movement mechanics.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    instagram: '#',
    twitter: '#',
  },
  {
    name: 'SARAH CHEN',
    title: 'Performance Nutritionist',
    bio: 'Sarah combines her dietetics expertise with functional training to optimize body composition.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
    instagram: '#',
    twitter: '#',
  },
  {
    name: 'DAVID RODRIGUEZ',
    title: 'Mobility & Recovery Coach',
    bio: 'David\'s programs focus on injury prevention and longevity in sport through proper movement.',
    image: 'https://images.unsplash.com/photo-1518457900604-b6e83c292d33?auto=format&fit=crop&w=800&q=80',
    instagram: '#',
    twitter: '#',
  },
];

const TrainersSection = () => {
  return (
    <section id="trainers">
      <h2 className="section-title">MEET OUR TRAINERS</h2>
      <div className="trainers-grid">
        {trainers.map((trainer, idx) => (
          <div className="trainer-card" key={idx}>
            {/* <div className="trainer-image">
              <Image
                src={trainer.image}
                alt={`Trainer ${trainer.name}`}
                width={800}
                height={533}
                layout="responsive"
                className="rounded"
              />
              <div className="trainer-social">
                <a href={trainer.instagram}><i className="fab fa-instagram"></i></a>
                <a href={trainer.twitter}><i className="fab fa-twitter"></i></a>
              </div>
            </div> */}
            <h4>{trainer.name}</h4>
            <p>{trainer.title}</p>
            <p>{trainer.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainersSection;
