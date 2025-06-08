import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';


export default function Home() {
  return(
    <main>
      <HomeSection/>
      <AboutSection/>
      <ServicesSection/>
      <ContactSection/>
    </main>
  );
}