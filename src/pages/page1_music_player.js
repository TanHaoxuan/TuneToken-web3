import React from 'react';
import {Link} from 'react-router-dom';
import music_image from "../images/music_page.png";
import "../styles/Home.css"

export default function home() {
  const  styles = {
    backgroundImage: `url(${music_image}`,
    backgroundSize: 'cover', 
    padding: '12px', 
  }
  return (
    <div className="home" style={styles}>
      <div className="headerContainer" style={{ display: 'flex', flexDirection: 'column' }}>
        {/*
          <h1> TuneToken </h1>
          <p> Revolutionize your music experience!</p>
        */}
        <Link to="/page2_songs">
          <button style={{ marginBottom: '10px' }}> Upload Song </button>
        </Link>
        <Link to="/page2_songs">
          <button> Report Piracy </button>
        </Link>
      </div>
    </div>
  )
}