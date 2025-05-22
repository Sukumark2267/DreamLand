
import Image from 'next/image';
import Spline from '@splinetool/react-spline/next';
import './herosection.css';
import HeroTextContent from './herocontent';
import SplineBG from './spline';




export default function HeroSection() {
  return (
  <>
<section className="hero">
    {/* <div className="hero-content">  
      <h2>UNLEASH YOUR POTENTIAL</h2>
      <p>Brampton&rsquo;s premier fitness community where athletes are made. Join the movement that&rsquo;s transforming lives through strength, discipline, and community.</p>
      <button className="cta-button">Start Your Journey Today</button>
    </div> */}
    <HeroTextContent />
    <SplineBG />
      {/* <div className="spline-background">
        <Spline
          scene="https://prod.spline.design/0ciJ5ZeCPaRGiWCR/scene.splinecode"
        />
      </div> */}


      <Image
             src="/images/logo/dl_icon_yellow_empty.png" 
             alt="Dreamland Athletics Gym"
             fill
             className=" bg-logo object-cover shadow-[0_10px_30px_rgba(0,0,0,0.6)] rounded-xl "
             priority/>

      <Image
             src="/images/logo/dl_icon_yellow_empty-shadow.png" 
             alt="Dreamland Athletics Gym"
             fill
             className=" bg-belowlayer object-cover rounded-lg shadow-[0_0_0_4px_#000]"
             priority/>
     <Image
             src="/images/elements/B.png" 
             alt="Dreamland Athletics Gym"
             fill
             className=" bg-imageB object-contain rounded-lg "/>


  </section>

    <div className="dividerborder relative w-4/4 h-10 mt-[-1px]"> 
      <Image
        src="/images/elements/BORDER-Horizontal.png"
        alt="Section Divider Border"
        fill
        className="object-cover"
        priority
      />
    </div>



  </>
  );
}