import React from 'react'
import '../styles/Hero.css'
import heroImg1 from '../images/hero-img12.png'
import heroImg2 from '../images/hero-img22.png'
import heroImg3 from '../images/hero-img31.png'
import heroImg4 from '../images/hero-img42.png'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-text">
              <div className="hero-line" />
              <h1>APEM:Automated Platform for Easy Meal</h1>
              <p>THE SMART WAY TO COOK</p>
              <a href="#recipies"><button>Recipies</button></a>
        </div>
        <div className="hero-images">
            <span className='span1'>
              <img src={heroImg2} alt="" />
              <img src={heroImg4} alt="" />
            </span>
            <span className='span2'>
              <img src={heroImg3} alt="" />
              <img src={heroImg1} alt="" />
            </span>
        </div>
    </div>
  )
}

export default Hero