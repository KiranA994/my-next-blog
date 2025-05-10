"use client";
import Header from "@/components/Header";
import Landing from "@/app/landing/Home";
import Footer from "@/components/Footer";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useState } from "react";
config.autoAddCss = false;
export default function Home() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show heading after 1 second
    const headingTimer = setTimeout(() => {
      setIsVisible(true);
    }, 250);
    
    return () => {
      clearTimeout(headingTimer);
    };
  }, []);

  return (
  <>
    <div className="relative">
        <Header />
        <div className="relative h-[60vh]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[100] flex-col gap-6 w-full bg-[url(/bgnd.png)] bg-no-repeat bg-cover">
            <h1 className={`font-inter  text-center text-white lg:text-6xl md:text-4xl sm:text-3xl min-[320px]:text-3xl max-[639px]:text-3xl mb-6 transition-all duration-250 transform ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
                Elevate the technology and 
                daily news happening
                around the world
            </h1>
            <p className="text-center text-white lg:text-2xl md:text-xl sm:text-lg min-[320px]:text-lg max-[639px]:text-lg">Stories, tips, and reflections to inspire your everyday life.</p>
        </div>
        </div>
      </div>
    <Landing />
    <Footer />
  </>
  );
}
