import { useState, useEffect } from 'react';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import TechSkills from './components/TechSkills';
import SoftSkills from './components/SoftSkills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'education', 'certificates', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} />
      <Banner />
      <Projects />
      <TechSkills />
      <SoftSkills />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;