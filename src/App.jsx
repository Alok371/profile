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
import Skills from './components/Skills';

function App() {
  const isMobile = window.innerWidth <= 768; // Define your own breakpoint here

  return (
    <div>
      <Navbar />
      <Hero />
      <AnimateWhenVisible shouldAnimate={!isMobile}>
        <About />
      </AnimateWhenVisible>
      <AnimateWhenVisible shouldAnimate={!isMobile}>
        <Project />
      </AnimateWhenVisible>
      <AnimateWhenVisible shouldAnimate={!isMobile}>
        <Skills />
      </AnimateWhenVisible>
      <AnimateWhenVisible shouldAnimate={!isMobile}>
        <Education />
      </AnimateWhenVisible>
      <AnimateWhenVisible shouldAnimate={!isMobile}>
        <Contact />
      </AnimateWhenVisible>
      <Footer />
    </div>
  );
}

const AnimateWhenVisible = ({ children, shouldAnimate }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={shouldAnimate ? { opacity: 0, y: 50 } : null}
      animate={shouldAnimate ? { opacity: inView ? 1 : 0, y: inView ? 0 : 50 } : null}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default App;
