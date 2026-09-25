import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Programs from '../components/Programs';
import Facilities from '../components/Facilities';
import PrincipalMessage from '../components/PrincipalMessage';
import Footer from '../components/Footer';
import DifferenceSection from '../components/DifferenceSection';

export default function Home() {
  return (
    <>
      <Hero />
      <DifferenceSection />
      <AboutSection />
      <Programs />
      <PrincipalMessage />
      <Facilities />
      <Footer />
    </>
  );
}