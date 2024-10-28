import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery';
const Projects = () => {
  return (
    <div>
      <Header/>
      <div className="container">
      <h1>Our Projects</h1>
      <Gallery/>
      </div>
      <Footer/>
    </div>
  )
}

export default Projects
