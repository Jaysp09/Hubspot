import React from "react";
import { FaUser } from "react-icons/fa";

const Team = () => {
  return (
    <section className="py-12 md:py-24 lg:py-18 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Our Team
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Meet the talented individuals who are driving{" "}
            <span className="text-blue-600 font-semibold">KLE-HubSpot</span>{" "}
            forward with their dedication and creativity.
          </p>
        </div>

        {/* Team Grid */}
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Team Member */}
          {[
            {
              name: "Jatin Patil",
              id: "02FE22BCI020",
              description: "5th Sem Computer Science(Airtifical Intelligence) Department.",
            },
            {
              name: "Ananya Banahatti",
              id: "02FE22BCI008",
              description: "A creative mind with a passion for design and user experience.",
            },
            {
              name: "Sakshi Hooli",
              id: "02FE22BCI039",
              description: "A detail-oriented individual committed to delivering excellence.",
            },
            {
              name: "Manish Sabnis",
              id: "02FE22BCI024",
              description: "An exceptional team player skilled in technology and collaboration.",
            },
            
          ].map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <FaUser className="text-white w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mt-4 text-gray-800 group-hover:text-indigo-600">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.id}</p>
              <p className="text-sm text-gray-500 mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
