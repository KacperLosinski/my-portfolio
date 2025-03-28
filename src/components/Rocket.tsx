"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const Rocket = () => {
  useEffect(() => {
    gsap.to("#rocket", {
      scrollTrigger: {
        trigger: "body",         // Rakieta rusza przy scrollowaniu całego body
        start: "top top",        // Od początku strony
        end: "bottom bottom",    // Do końca
        scrub: true,             // Płynnie "przyczepiona" do scrolla
      },
      ease: "none",
      motionPath: {
        path: "#path",           // Używamy Twojej ścieżki
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    });
  }, []);

  return (
    <>
      {/* Rakieta */}
      <img
        id="rocket"
        src="/images/rocket.png"
        alt="rocket"
        className="fixed top-0 left-0 w-32 md:w-40 lg:w-64 xl:w-96 -z-50 pointer-events-none"
      />

      {/* SVG z Twoją ścieżką */}
      <svg
        className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"
        viewBox="-20 0 450 200"
        id="svg"
      >
        <g transform="translate(0, 0)">
        <path
          id="path"
          fill="none"
          stroke="transparent"
          strokeWidth="2"
          d="M9,100c0,0,18.53-41.58,49.91-65.11
             c30-22.5,65.81-24.88,77.39-24.88
             c33.87,0,57.55,11.71,77.05,28.47
             c23.09,19.85,40.33,46.79,61.71,69.77
             c24.09,25.89,53.44,46.75,102.37,46.75
             c22.23,0,40.62-2.83,55.84-7.43
             c27.97-8.45,44.21-22.88,54.78-36.7
             c14.35-18.75,16.43-36.37,16.43-36.37
             "
        />
        </g>
      </svg>
    </>
  );
};

export default Rocket;
