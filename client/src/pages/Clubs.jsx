import React from "react";
import { Link } from "react-router-dom";

export default function Clubs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center pt-24">
            <h1 className="text-4xl font-bold text-white mt-2">
              Explore Our Clubs
            </h1>
            <p className="text-base text-white w-8/12 text-center mt-3 md:text-xl">
              Join a community of passionate individuals, discover your talents, and contribute to a vibrant campus life through our diverse range of clubs.
            </p>
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-gray-200">
        <div className="max-w-[1140px] mx-auto container">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              Our Clubs
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              From arts and culture to technology and sports, KLE-HubSpot offers a wide range of clubs to suit every interest.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {/* Club Cards */}
            {[
              {
                name: "Sports Club",
                description:
                  "Promoting physical fitness and sportsmanship through events and activities.",
                image: "/sports.jpg",
              },
              {
                name: "Melodia Club",
                description:
                  "A platform for music enthusiasts to perform, collaborate, and grow.",
                image: "/melodia.png",
              },
              {
                name: "Mask Club",
                description:
                  "Showcasing diverse performing arts and fostering creative expression.",
                image: "/dance.jpg",
              },
              {
                name: "HR Club",
                description:
                  "Connecting students with industry professionals through workshops and seminars.",
                image: "/Hr.jpg",
              },
              {
                name: "Women Empowerment Club",
                description:
                  "Empowering women through leadership development and meaningful discussions.",
                image: "/w-e.jpg",
              },
              {
                name: "Community Development Club",
                description:
                  "Working towards social causes and raising awareness within the community.",
                image: "/c-e.jpg",
              },
              {
                name: "Media Club",
                description:
                  "Capturing moments and creating impactful stories through photography and media.",
                image: "/media.jpg",
              },
              {
                name: "Literary Club",
                description:
                  "Fostering a love for literature through discussions, events, and creative writing.",
                image: "/literary.jpg",
              },
            ].map((club, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center shadow-lg p-6 rounded-lg bg-gradient-to-r from-white to-gray-50 transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-24 h-24 rounded-full mb-4 border-4 border-gradient-to-tr from-blue-400 to-pink-400"
                />
                <h3 className="text-xl font-bold text-gradient bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  {club.name}
                </h3>
                <p className="text-gray-600 mt-2">{club.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-t from-gray-200 via-gray-100 to-white">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-transparent bg-clip-text">
            Ready to Join a Club?
          </h2>
          <p className="text-gray-700 max-w-2xl mt-4">
            Take the first step towards an exciting and fulfilling campus life. Explore our clubs and find the one that fits you best!
          </p>
          <div className="flex gap-4 mt-8">
            <Link
              to="/register"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 px-8 text-sm font-medium text-white shadow transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              Join a Club
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
