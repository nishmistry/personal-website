import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import ContactForm from './ContactForm';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
