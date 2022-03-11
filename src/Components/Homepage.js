import React from 'react';
import About from './About';
import Backatac from './Backatac';
import Backing from './Baching';
import Contact from './Contact';
import Footer from './Footer';
import Grid from './Grid';
import NavbarHome from './Navbar';

export default function Homepage() {
  return <div>
    <NavbarHome />
    <Backing />
    <Grid/>
    <Backatac />
    <About />
    <Contact />
    <Footer />
  </div>;
}