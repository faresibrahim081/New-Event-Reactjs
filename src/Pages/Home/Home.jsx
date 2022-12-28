
import React from 'react'
import AboutUs from './components/AboutUs/AboutUs'
import Accordion from './components/AccordionComponent/AccordionComponent'
import ContactUs from './components/ContactUs/ContactUs'
import CreativeSpeakersComponent from './components/CreativeSpeaker/CreativeSpeakers'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Nav/Navbar'
import OurProgramers from './components/OurProgramers/OurProgramers'
import OurSponsor from './components/OurSponsor/OurSponser'
import Overview from './components/Overview/Overview'
import RegisterHere from './components/RegisterHere/RegisterHere'
import Venue from './components/Venue/Venue'
import WatchVideo from './components/WatchVideo/WatchVideo'

function Home() {
  return (
    <>
        <Navbar />
        <Header />
        <AboutUs />
        <Overview />
        <WatchVideo />
        <CreativeSpeakersComponent />
        <OurProgramers />
        <RegisterHere />
        <Accordion />
        <Venue />
        <OurSponsor />
        <ContactUs />
        <Footer />
    </>
  )
}

export default Home