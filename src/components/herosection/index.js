import Image from 'next/image';
import Spline from '@splinetool/react-spline/next';
import './herosection.css'

export default function HeroSection() {
  return (
  <>
<section className="hero">
    <div className="hero-content">  
      
      <h2>UNLEASH YOUR POTENTIAL</h2>
      <p>Brampton&rsquo;s premier fitness community where athletes are made. Join the movement that&rsquo;s transforming lives through strength, discipline, and community.</p>
      <button className="cta-button">Start Your Journey Today</button>
    </div>
    <div className="spline-background">
        <Spline
          scene="https://prod.spline.design/0ciJ5ZeCPaRGiWCR/scene.splinecode"
        />
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
      <div className="relative w-3/2  h-[200px] md:h-[300px] lg:h-[250px]">
            <Image 
              src="/abc.png" 
              alt="Dreamland Athletics Gym"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </div>
      </div>
    </div>
  </section>
  </>
  );
}