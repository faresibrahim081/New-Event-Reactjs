
import React from 'react'
import AboutUs from './components/AboutUs/AboutUs'
import CreativeSpeakersComponent from './components/CreativeSpeaker/CreativeSpeakers'
import Header from './components/Header/Header'
import Navbar from './components/Nav/Navbar'
import OurProgramers from './components/OurProgramers/OurProgramers'
import Overview from './components/Overview/Overview'
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
    </>
  )
}

export default Home