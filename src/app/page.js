import Navbar from '@/components/navbar';
import HeroSection from '@/components/herosection';
import AboutSection from '@/components/About';
import ProgramsSection from '@/components/programs';
import MembershipSection from '@/components/membership';
import TrainersSection from '@/components/Trainers';
import SuccessStoriesSection from '@/components/successstories';
import InstagramSection from '@/components/instagram';
import ContactSection from '@/components/contact';
import Banner from '@/components/Banner';
import Footer from '@/components/footer';


export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      {/* <AboutSection /> */}
      <ProgramsSection />
      <MembershipSection />
      {/* <TrainersSection /> */}
      <SuccessStoriesSection />
      <InstagramSection />
      <ContactSection />
      <Banner />
      <Footer />
    </main>
  );
}