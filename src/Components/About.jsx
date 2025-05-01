import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';



gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        const description = descRef.current;
        const container = containerRef.current;

        const isMobile = window.innerWidth <= 768;

        if (!isMobile) {
            const scrollDistance = description.scrollHeight - container.offsetHeight;

            ScrollTrigger.create({
                trigger: container,
                start: 'top top',
                end: `+=${scrollDistance}`,
                scrub: true,
                pin: container,
                anticipatePin: 1,
                onUpdate: self => {
                    gsap.to(description, {
                        y: -scrollDistance * self.progress,
                        ease: 'none',
                        overwrite: 'auto'
                    });
                }
            });
        } else {
            // Remove transform for mobile so it doesn't keep the div stuck
            gsap.set(description, { clearProps: "all" });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="boostr_wrapper">
            <div className="boostr_container" ref={containerRef}>
                <div className="boostr_content">
                    <div className="boostr_image">
                        <h2>My Journey Into Impactful Front-End Experiences</h2>
                    </div>
                    <div className="boostr_description">
                        <div className="boostr_inner" ref={descRef}>
                            <div className="boostr_division">
                                <div className="boostr_heading">
                                </div>
                                
                            </div>

                            <div className="boostr_division">
                                <div className="boostr_heading">
                                    <h1>Precision in the Details</h1>
                                    <p>Every pixel has a purpose. I thrive on building intuitive interfaces where alignment, spacing, and motion come together seamlessly. Whether it’s refining design tokens or creating consistent components, I’m committed to making UI systems that are both scalable and beautiful.</p>
                                </div>
                                
                            </div>

                            <div className="boostr_division">
                                <div className="boostr_heading">
                                <h1>Balancing Vision & Value</h1>
                                <p>Great design solves real problems. I focus on aligning user needs with business goals pushing creativity without losing sight of practicality. Knowing when to innovate and when to simplify is what helps me ship work that matters.</p>
                                    
                                </div>
                                
                            </div>

                            <div className="boostr_division">
                                <div className="boostr_heading">
                                <h1>Code-Savvy Creative</h1>
                                <p>To me, front-end development isn't just execution it's expression. Understanding code allows me to prototype fast, collaborate better with developers, and ensure my designs are grounded in what’s possible on the web.</p>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
