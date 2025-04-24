import Image from 'next/image';

export default function HeroSection() {
  return (
  <>
<section className="hero">
    <div className="hero-content">
      <h2>UNLEASH YOUR POTENTIAL</h2>
      <p>Brampton&rsquo;s premier fitness community where athletes are made. Join the movement that&rsquo;s transforming lives through strength, discipline, and community.</p>
      <button className="cta-button">Start Your Journey Today</button>
    </div>
  </section>

  <section id="about">
    <h2 className="section-title">OUR STORY</h2>
    <div className="about-content">
      <div className="about-text">
        <p>Founded in 2018, Dreamland Athletics began as a small training facility with a big vision - to create a space where athletes of all levels could come together to push their limits and achieve extraordinary results.</p>
        <p>What started as a passion project has grown into Brampton&rsquo;s most dynamic fitness community, with over 1,000 members and counting. Our Instagram community (@dreamland_brampton) showcases real transformations, workout tips, and the vibrant energy that makes Dreamland special.</p>
        <p>We believe fitness is more than physical - it&rsquo;s mental resilience, community support, and personal growth. Every squat rack, battle rope, and weight plate at Dreamland tells a story of transformation.</p>
      </div>
      <div className="about-image">
        {/* <Image src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80" alt="Dreamland Athletics Gym" height={100} width={100} /> */}
      </div>
    </div>
  </section>
  </>
  );
}