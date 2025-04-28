import './Hero.css';
import React, { useEffect, useRef } from 'react';
import TypewriterComponent from 'typewriter-effect';
import { gsap } from 'gsap';

export default function Hero() {
    const heroMainRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            gsap.to(heroMainRef.current, {
                y: 0,
                duration: 1,
                ease: "power3.in",
            });
        }, 10000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='hero_container'>
            <div className='hero_intro'>
                <h1 className="hero_text">
                    Looking for a&nbsp;
                    <span className="typewriter_text">
                        <TypewriterComponent 
                            options={{
                                strings: [
                                    'Front-End Developer ?',
                                    'React Enthusiast ?',
                                    'UI/UX Lover ?',
                                    'Problem Solver ?',
                                ],
                                autoStart: true,
                                loop: true,
                                cursor: '',
                                delay: 35, /*animation speed*/
                                deleteSpeed: 35,
                            }}
                        />
                    </span>
                </h1>
            </div>

            <div className='hero_main' ref={heroMainRef}>
                <h2>Welcome to my Portfolio!</h2>
            </div>
        </div>
    );
}
