import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingHandler from './components/LoadingHandler';

export default function Home() {
  return (
    <LoadingHandler>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <div id="hero">
            <Hero />
          </div>
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LoadingHandler>
  );
}