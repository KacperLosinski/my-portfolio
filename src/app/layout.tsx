import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="font-sans bg-custom-gradient min-h-screen">
        <Navbar />
        <section
          id=""
          className="sm:mt-[0px] mt-[100px] h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-darkBlue to-lightBlue text-white px-8"
        >
          {/* Lewa kolumna: Tekst */}
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
              Lorem ipsum, adojis akmsd skds. Kacsdmk dlwm, dlorem lorem,
              dijdsia odaksaoka dwijwjd dis a dlsod. okdaw dadoowkd kdamiodw.
            </p>
          </div>

          {/* Prawa kolumna: Obraz */}
          <div className="mt-8 md:mt-0">
            <Image
              src="/images/avatar.jpg"
              alt="Profile"
              width={320} // szerokość obrazu
              height={320} // wysokość obrazu
              className="rounded-full shadow-lg bg-primary"
            />
          </div>
        </section>
        <section
          id="about"
          className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-darkBlue to-lightBlue text-white px-8 md:px-16"
        ></section>
        {children}
      </body>
    </html>
  );
}
