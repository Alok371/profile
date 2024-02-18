import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Project';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AnimateWhenVisible>
        <About />
      </AnimateWhenVisible>
      <AnimateWhenVisible>
        <Project />
      </AnimateWhenVisible>
      <AnimateWhenVisible>
        <Education />
      </AnimateWhenVisible>
      <AnimateWhenVisible>
        <Contact />
      </AnimateWhenVisible>
      <Footer />
    </div>
  );
}

const AnimateWhenVisible = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default App;
