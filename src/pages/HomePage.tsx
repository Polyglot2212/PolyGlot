import React from 'react'
import '../styles/HomePage.css'
import firstimage from "../assets/reading.png"
import okno from "../assets/okno.png"
import meditateQyz from "../assets/meditating.png"
import sittingReading from "../assets/sitting-reading.png"
import Navbar from '../components/Navbar'


export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className="first_block">
        <img src={sittingReading} alt="firstimage" className="first_image" />
        <b className="name">PolyGlot - learn a lot!</b>
        <b className="description">It is a platform for learning three languages Kazakh, English and Russian. 
          There will be a quiz and a personal account with progress. </b>
      </div>
      <div className="second_block">
        <div className="info">
          <b className="info_top">
            Welcome to Polyglot
            </b>
          <b className="info_name">
            Your Personal Language Tutor
          </b>
          <b className="info_descrip">
            Learn languages in a fun and interactive way. 
            Practice daily and track your progress!
          </b>
        </div>
        <div className="containerW_img">
          <img src={okno} alt="okno1" className="container" />
          <img src={okno} alt="okno2" className="containerdva" />
          <img src={meditateQyz} alt="chel" className="cheldaun" />
        </div>
      </div>
      <div className="third_container">
        
      </div>
    </div>
  )
}
