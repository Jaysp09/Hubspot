import Team from "@/components/Team";
import {
  FaUniversity,
  FaMicroscope,
  FaBookOpen,
  FaGlobe,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <div className="w-full h-full bg-[url(./conference.png)] bg-no-repeat bg-cover opacity-75 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center pt-24">
            <h1 className="text-4xl font-bold text-white mt-2">
              About KLE-HubSpot.
            </h1>
            <p className="text-base text-white w-8/12 text-center mt-3 md:text-xl">
              KLE Hubspot is a comprehensive platform for managing college events. It enables students to explore and register for events, allows club leaders to create and manage their activities, and provides admins with tools to oversee users and events. The platform streamlines event organization, fosters collaboration, and enhances engagement across the campus community.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* College Details Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-gray-200">
        <div className="max-w-[1140px] mx-auto container">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text">
              KLE Technological University
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <FaUniversity className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-bold mt-4">Academic Excellence</h3>
              <p className="text-gray-600">
                Our robust academic programs focus on fostering critical thinking, creativity, and problem-solving skills across diverse disciplines.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaMicroscope className="w-12 h-12 text-green-500" />
              <h3 className="text-xl font-bold mt-4">Research & Innovation</h3>
              <p className="text-gray-600">
                With cutting-edge laboratories and research initiatives, we are at the forefront of technological advancements and knowledge creation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaBookOpen className="w-12 h-12 text-yellow-500" />
              <h3 className="text-xl font-bold mt-4">Student Development</h3>
              <p className="text-gray-600">
                Beyond academics, we nurture talent through extracurricular activities, sports, and leadership programs for holistic growth.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaGlobe className="w-12 h-12 text-red-500" />
              <h3 className="text-xl font-bold mt-4">Global Vision</h3>
              <p className="text-gray-600">
                Our global partnerships and exchange programs prepare students to excel in a dynamic, interconnected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-gray-200">
        <div className="container flex flex-col items-center text-center">
          <img 
            src="./logo.png" 
            alt="KLE Technological University Logo" 
            className="w-40 h-auto mb-6"
          />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-purple-600 text-transparent bg-clip-text">
            KLE Technological University
          </h2>
          <p className="text-gray-700 max-w-xl mt-4">
            "Empowering future innovators and leaders." Guided by our visionary principal 
            <span className="font-semibold text-gray-900"> Dr. S.F. Patil . </span>
          </p>
          <Link
            to="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 mt-6"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
