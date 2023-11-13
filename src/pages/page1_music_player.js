import React from 'react';
import {Link} from 'react-router-dom';
import music_image from "../images/music.jpg";
import "../styles/Home.css"

export default function home() {
  const  styles = {
    backgroundImage: `url(${music_image}`,
    backgroundSize: 'cover', 
    padding: '12px', 
  }
  return (
    <div className= "home"style={styles}>
        <div
            className= "headerContainer"
         >
            <h1> TuneToken </h1>
            <p> Revolutionize your music experience!</p>
            <Link to ="/page2_songs">
                <button> Play the music </button>
            </Link>
        </div>
    </div>
  )
}