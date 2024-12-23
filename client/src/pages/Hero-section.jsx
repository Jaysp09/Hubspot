"use client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  const words = [
    {
      text: "Simplify ,",
      className: "text-[35px]",
    },
    {
      text: "Create ,",
      className: "text-[35px]",
    },
    {
      text: "Collaborate ,",
      className: "text-[35px]",
    },
    {
      text: "Celebrate",
      className: "text-[35px]",
    },
    {
      text: "Every",
      className: "text-[35px]",
    },
    {
      text: "Event",
      className: "text-[35px]",
    },
    {
      text: "With",
      className: "text-[35px]",
    },
    {
      text: "KLE-HubSpot .",
      className: "text-[55px] text-customBlue",
    },
  ];

  return (
    <main className="relative">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-200 animate-gradient-move"></div>
      {/* Particle Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/particles.svg')] opacity-30"></div>

      <div className="max-w-[1040px] mx-auto h-[540px] relative z-10">
        <div className="flex flex-col justify-center items-center text-center md:w-9/12 mx-auto md:px-0 px-2 pt-10 space-y-6">
          {/* Contact Us Button */}
          <div className="inset-0">
            <Link
              className="px-3 text-sm font-medium inline-flex items-center justify-center border rounded-full text-zinc-600 hover:text-black transition duration-150 ease-in-out w-full group border-black"
              to="/contact"
            >
              <span className="inline-flex items-center">
                Contact Us
                <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              </span>
            </Link>
          </div>

          {/* Typewriter Effect */}
          <TypewriterEffect words={words} fontSize="text-3xl" />

          {/* Description */}
          <p className="text-lg text-gray-500">
            KLE Hubspot is your gateway to revolutionizing campus events.
            Empower students, unite clubs, and enable seamless event
            management—all in one place.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link to="/register">
              <button
                type="button"
                className="rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-500 px-6 py-2 text-white text-sm font-medium shadow-lg hover:shadow-indigo-500/50 animate-glow"
              >
                Get Started
              </button>
            </Link>
            <Link to="/about">
              <button className="border-customBlue rounded-md border shadow-sm transition-colors bg-white hover:bg-gray-100 px-6 py-2 text-black text-sm font-medium">
                Learn More
              </button>
            </Link>
          </div>

          {/* Arrow Down Icon */}
          <div className="items-center pt-32">
            <FaArrowDown
              icon="mdi:arrow-down"
              className="text-3xl text-blue-500 animate-bounce w-6 h-6"
            ></FaArrowDown>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
