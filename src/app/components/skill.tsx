import React from "react";
import { FaCuttlefish, FaNodeJs, FaReact, FaHtml5, FaDatabase, FaPuzzlePiece } from "react-icons/fa"; // Added FaPuzzlePiece
import { SiMongodb } from "react-icons/si";

const Skill = () => {
  const skills = [
    { name: "C++", icon: <FaCuttlefish className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "React.js", icon: <FaReact className="text-blue-300" /> },
    { name: "SQL", icon: <FaDatabase className="text-purple-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "DSA", icon: <FaPuzzlePiece className="text-yellow-500" /> }, // Updated to puzzle icon
    { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-500" /> },
  ];

  return (
    <div id="Skills" className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-24 custom-image">
      <section className="text-gray-300 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-white mb-4">My Skills</h1>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 w-full md:w-1/3 lg:w-1/4">
                <div className="h-full bg-gray-700 bg-opacity-75 rounded-lg shadow-md flex flex-col items-center justify-center p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-600">
                  {/* Icon with hover effects */}
                  <div className="text-4xl mb-4 transform transition-all duration-300 hover:text-yellow-400 hover:rotate-12">
                    {skill.icon}
                  </div>
                  <h2 className="text-xl font-medium">{skill.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
