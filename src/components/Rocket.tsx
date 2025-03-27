"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Rocket = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Lot zgodny z Twoim ostatnim rysunkiem
    tl.to("#rocket", {
      x: "40vw",
      y: "0vh",
      rotate: -20,
      ease: "none",
    })
      .to("#rocket", {
        x: "25vw",
        y: "20vh",
        rotate: -40,
        ease: "none",
      })
      .to("#rocket", {
        x: "10vw",
        y: "45vh",
        rotate: -80,
        ease: "none",
      })
      .to("#rocket", {
        x: "30vw",
        y: "70vh",
        rotate: -40,
        ease: "none",
      })
      .to("#rocket", {
        x: "55vw",
        y: "50vh",
        rotate: -10,
        ease: "none",
      })
      .to("#rocket", {
        x: "30vw",
        y: "30vh",
        rotate: -60,
        ease: "none",
      })
      .to("#rocket", {
        x: "5vw",
        y: "100vh",
        rotate: -120,
        scale: 0.9,
        opacity: 0.5,
        ease: "none",
      });
  }, []);

  return (
    <img
      id="rocket"
      src="/images/rocket.png"
      alt="rocket"
      className="fixed top-0 left-0 w-64 z-50 pointer-events-none"
    />
  );
};

export default Rocket;
