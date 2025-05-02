import "./Projects.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TheFryShackVideo from "../Assets/TheFryShack.mp4";
import BoostrVideo from "../Assets/BoostrVideo.mp4";
import MaxVerstappen from "../Assets/MaxVerstappen.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const sectionsRef = useRef(null);
  const introRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalScroll = sectionsRef.current.scrollWidth - window.innerWidth;

      gsap.to(sectionsRef.current, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      gsap.fromTo(
        introRef.current,
        { scale: 0, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            scrub: true,
          },
        }
      );


    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="horizontal_container" ref={containerRef} id="work">
      <div className="horizontal_sections" ref={sectionsRef}>

        <div className="section one">
            <div className="projects_intro" ref={introRef}>
                <h2>Scroll to explore my</h2>
                <h1>PROJECTS</h1>
            </div>
            
        </div>

        <div className="section two">
            <div className="project_1 project">
                <div className="project_text">
                <div className="project_description">
                    <h1>The Fry Shack</h1>
                    
                        <p>
                        A sleek and modern website web experience for a fast food restaurant. Built with ReactJS and styled for responsiveness, the site features smooth GSAP-powered animations to enhance user engagement. 
                        </p>
                        <button className="demo_btn"
                        onClick={() => window.open('https://nikhilbokade25.github.io/TheFryShack/', '_blank', 'noopener,noreferrer')}
                        >Visit Site</button>
                    </div>
                    
                </div>

                <div className="project_video">
                <video
                    src={TheFryShackVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="project_1_video"
                />
                </div>
            </div>
        </div>

        <div className="section three">
            <div className="project_2 project">
                <div className="project_text">
                <div className="project_description">
                    <h1>Boostr Drink</h1>
                    
                    <p>
                    A bold and high-energy website designed for Boostr, a conceptual energy drink brand. Developed using ReactJS with smooth GSAP animations, the site delivers a fast-paced, visually striking user experience that reflects the brand’s energetic identity. 
                    </p>
                    <button className="demo_btn"
                    onClick={() => window.open('https://nikhilbokade25.github.io/BoostrEnergyDrink/', '_blank', 'noopener,noreferrer')}
                    >Visit Site</button>
                    </div>
                    
                </div>

                <div className="project_video">
                <video
                    src={BoostrVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="project_1_video"
                />
                </div>
            </div>
        </div>

        <div className="section four">
            <div className="project_3 project">
                    <div className="project_text">
                    <div className="project_description">
                        <h1>Max Verstappen</h1>
                        
                        <p>
                        A sleek and adrenaline-fueled tribute site dedicated to Formula 1 champion Max Verstappen. Built with ReactJS and animated using GSAP, the site captures the thrill of racing through dynamic scroll interactions, high-impact visuals, and smooth transitions. 
                        </p>
                        <button className="demo_btn"
                        onClick={() => window.open('https://nikhilbokade25.github.io/MaxVerstappen/', '_blank', 'noopener,noreferrer')}
                        >Visit Site</button>
                        </div>
                        
                    </div>

                    <div className="project_video">
                    <video
                    src={MaxVerstappen}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="project_1_video"
                />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
