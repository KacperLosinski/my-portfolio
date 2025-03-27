import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ToolKit from "@/components/ToolKit";
import Projects from "@/components/projectsPortfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import Image from "next/image";
import Script from "next/script";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/my-portfolio" : "";


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio built with Next.js and Tailwind CSS",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Font Awesome Script */}
        <Script
          src="https://kit.fontawesome.com/bd96bc92b7.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-third min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section
          id="home"
          className="pt-[calc(var(--nav-height)+20px)] min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-darkBlue to-lightBlue text-white px-8"
        >
          {/* Left Column: Text */}
          <div className="max-w-xl text-center md:text-left space-y-4 md:mr-12">
            <h1 className="text-3xl md:text-6xl font-semibold leading-tight">
              Hi, <br />
              I’m <span className="text-primary">Kacper,</span>
              <br />
              <span className="text-secondary md:whitespace-nowrap">
                frontend developer
              </span>
            </h1>
            <p className="text-gray-300 text-sm md:text-lg">
              Passionate about creating intuitive and visually appealing web experiences.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="mt-8 md:mt-0">
            <Image
              src={`${basePath}/images/avatar.jpg`}
              alt="Profile"
              width={320}
              height={320}
              className="rounded-full shadow-lg bg-primary"
            />
          </div>
        </section>

        {/* About Me Section */}
        <section
          id="about"
          className="pt-[calc(var(--nav-height)+20px)] min-h-screen flex flex-col sm:flex-row items-center justify-center bg-gradient-to-br from-darkBlue to-lightBlue text-white px-8 md:px-16 relative"
        >
          {/* Left Column: Text */}
          <div className="max-w-3xl text-center md:text-left space-y-6 md:mr-16 lg:mr-24">
            <h3 className="text-white text-xl sm:text-2xl font-semibold uppercase tracking-wide">
              <span className="text-primary">/</span> About Me
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-[1.3] md:leading-[1.4]">
              I’ve been passionate about technology since childhood.
            </h2>
       <div className="space-y-4">
       <p className="max-w-xl text-gray-300 text-sm md:text-base">
              I’ve been studying frontend development since 2021 and am currently
              preparing to start my master’s degree in web development. I’m
              passionate about solving problems and embracing new challenges.
            </p>
            <p className="max-w-xl text-gray-300 text-sm md:text-base">
              I thrive in creative environments and continuously strive to enhance
              my skills in crafting user-friendly and visually appealing digital
              experiences.
            </p>
       </div>
          </div>

          {/* Right Column: Image + Decorations */}
          <div className="relative mt-12 md:mt-0 flex justify-center">
            <div className="relative w-[280px] sm:w-[320px] md:w-[400px]">
              <img
                src={`${basePath}/images/avatar.jpg`}
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded flex items-center">
                <img src={`${basePath}/images/adobe-firefly-icon.png`} alt="Adobe Firefly" className="h-4 w-4 mr-2"/>
                Adobe Firefly
              </div>
            </div>
          </div>
        </section>
        <section id="tool">
        <ToolKit />
        </section>
        <section id="projects">
        <Projects />
        </section>
        <section id="contact">
        <Contact />
        </section>
        <Footer />
        {children}
      </body>
    </html>
  );
}
