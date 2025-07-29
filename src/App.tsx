import React from 'react';
import PageTransition from './components/PageTransition';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <PageTransition>
      <div className="min-h-screen font-['Poppins']">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}

export default App;
