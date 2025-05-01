import "./Projects.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const sectionsRef = useRef(null);

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="horizontal_container" ref={containerRef}>
      <div className="horizontal_sections" ref={sectionsRef}>

        <div className="section one">
            <h2>Scroll to explore my</h2><br/>
            <h1>PROJECTS</h1>
        </div>

        <div className="section two">
            <div className="project_1 project">
                <div className="project_text">

                </div>

                <div className="project_video">

                </div>
            </div>
        </div>

        <div className="section three">
            <div className="project_2 project">
                <div className="project_text">

                </div>

                <div className="project_video">

                </div>
            </div>
        </div>

        <div className="section four">
            <div className="project_3 project">
                    <div className="project_text">

                    </div>

                    <div className="project_video">

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
