// components/MembershipSection.jsx
"use client";
import React, { useLayoutEffect } from 'react';
import './ServiceChart.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const membershipPlans = [
  {
    name: 'YODHA',
    description: 'Perfect for starting your fitness journey',
    price: 250,
    features: [
      '4 Sessions per month',
      '1 personal training session/week',
      'Locker room access',
      'Progress tracking',
    ],
    isPopular: false,
  },
  {
    name: 'VEER',
    description: 'For serious athletes committed to results',
    price: 280,
    features: [
      '8 Sessions per month',
      '2 personal training session/week',
      'Recovery area access',
      'Nutrition guide',
    ],
    isPopular: true,
  },
  {
    name: 'MAHAVEER',
    description: 'Premium coaching for maximum results',
    price: 350,
    features: [
      '16 Sessions per month',
      '4 personal training session/week',
      'Custom meal plan',
      '24/7 facility access',
    ],
    isPopular: false,
  },
];

const MembershipSection = () => {
  useLayoutEffect(() => {
    const animation = gsap.fromTo(
      '#membership',
      { scale: 0.7, opacity: 0.7 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.membership-container',
          start: 'top 80%',
          end: 'bottom 50%',
          toggleActions: 'restart none none none',
          pin: false,
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div className="membership-container">
    <section id="membership" style={{ transformOrigin: 'center' }}>
      <h2 className="section-title">MEMBERSHIP PLANS</h2>
      <div className="pricing-table">
        {membershipPlans.map((plan, index) => (
          <div key={index} className={`price-box ${plan.isPopular ? 'popular' : ''}`}>
            {plan.isPopular && <div className="popular-tag">MOST POPULAR</div>}
            <div className="content">
              {/* Front Face */}
              <div className="front">
                <h4>{plan.name}</h4>
                <h4>What&rsquo;s Included</h4>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className="cta-button" style={{ marginTop: '1.5rem' }}>
                  Turn the Cards!!
                </button>
              </div>

              {/* Back Face */}
              <div className="back">
                <div className="back-content">
                  <h4>{plan.name}</h4>
                  <div className="price">
                    ${plan.price}
                    <span>/month</span>
                  </div>
                  <button
                    className="cta-button"
                    style={{ marginTop: '1.5rem' }}
                    onClick={() => {
                      const contactSection = document.querySelector('#contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default MembershipSection;
