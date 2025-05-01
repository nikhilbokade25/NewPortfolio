import TypewriterComponent from 'typewriter-effect';
import './Hero.css';
import { useEffect } from 'react';
import { gsap } from 'gsap'; // Import GSAP for animation
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Hero() {
  const heroMainRef = useRef(null);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  useEffect(() => {
    gsap.fromTo(
      heroMainRef.current,
      { y: '100%', opacity: 0 }, // Start from below the screen with 0 opacity
      { y: '0%', opacity: 1, duration: 1, ease: 'power3.out', delay: 1 } // Slide up with fade-in
    );
  }, []);

  return (
    <div className="hero_container">
      <div className="hero_intro">
        <span className="static_text">Looking for a </span>
        <TypewriterComponent
          options={{
            strings: [
              'FRONT-END DEVELOPER ?',
              'REACT ENTHUSIAST ?',
              'UI/UX LOVER ?',
              'PROBLEM SOLVER ?',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <div className="hero_main" ref={heroMainRef}>
        
        <header>
          <h3>NIKHIL BOKADE</h3>
          <nav ref={navRef}>
            <a href="/#">MY WORK</a>
            <a href="/#">ABOUT ME</a>
            <a href="/#">CONTACT</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>

        <div className='hero_content'>
            <div className='hero_heading_1'>
                <h1>Hi ! I'm Nikhil Bokade 👋🏼</h1>
            </div>

            <div className='hero_heading_2'>
                <h1>FRONT-END DEVELOPER</h1>
            </div>

            <div className='hero_heading_3'>
                <h1><span className='heading_3_font'>based in</span> CANADA</h1>
            </div>

            <div className='hero_heading_4'>
                <p>
                2 years of shaping bold, user-first designs in high-impact consulting environments.
                I blend sharp visual design with UX strategy to drive real business results.
                Focused, fast, and fearless when it comes to creating standout digital experiences.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
}
