import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { TfiGithub } from "react-icons/tfi";

// Projects pictures
import BookNestPic from "../../../public/assets/Projects/BookNest.png";
import MessRelayPic from "../../../public/assets/Projects/MessRelay.png";
import VastukaarPic from "../../../public/assets/Projects/Vastukaar.png";
import TaskManagerPic from "../../../public/assets/Projects/TaskManager.png";
import PortfolioPic from "../../../public/assets/Projects/Portfolio.png";
import CalculatorPic from "../../../public/assets/Projects/LuvCalculator.png";


const Project = () => {
  return (
    <div id="Project">
        <section className="text-gray-600 body-font custom-image2">
        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-4xl font-medium title-font mb-2 text-white">
                Recent Projects
            </h1>
        </div>

            <div className="flex flex-wrap -m-4 ">
            
            {/* Projects */}

            {/* Book Nest */}
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                    <Image
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src={BookNestPic}
                    />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    MERN App
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Book Nest
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                    This is a Library management app with role-based user access. Three roles are defined: Admin, Librarian, and Members. 
                    </p>
                    
                    <span className="flex space-x-4 items-center mt-3">
                    <Link target="_blank" href={"https://github.com/Ayush76a/BookNest"}>
                        <p className="flex items-center leading-relaxed text-blue-500 hover:underline">
                            Github Repo <TfiGithub className="ml-2 "/>
                        </p>
                    </Link>

                    <Link target="_blank" href={"https://booknest-app.netlify.app/"}>
                        <p className="flex items-center leading-relaxed text-blue-500 hover:underline">
                            View Project <FaExternalLinkSquareAlt className="ml-2" />
                        </p>
                    </Link>
                    </span>
                </div>
                </div>
                </div>


            {/* Mess Relay */}
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                    <Image
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src={MessRelayPic}
                    />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    MERN App
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Mess-Relay
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                    This is a Mess management app that solves the problems of mess-menu management, complaints and expense tracking. 
                    </p>
                    
                    <span className="flex space-x-4 items-center mt-3">
                    <Link target="_blank" href={"https://github.com/fvizpal/mess-relay-app"}>
                        <p className="flex items-center leading-relaxed text-blue-500 hover:underline">
                            Github Repo <TfiGithub className="ml-2 "/>
                        </p>
                    </Link>

                    <Link target="_blank" href={"https://messrelay.netlify.app/"}>
                        <p className="flex items-center leading-relaxed text-blue-500 hover:underline">
                            View Project <FaExternalLinkSquareAlt className="ml-2" />
                        </p>
                    </Link>
                    </span>
                </div>
                </div>
                </div>

                {/* Vastukaar */}
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                    <Image
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src={VastukaarPic}
                    />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    MERN App
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Vastukaar
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                    An Inventory and Stock Management Solution designed to help businesses manage products in real time and enhance operational efficiency.
                    </p>
                    
                    <span className="flex space-x-4 items-center mt-3">
                    <Link target="_blank" href={"https://github.com/Ayush76a/Vastukaar_App"}>
                        <p className="flex items-center leading-relaxed text-blue-500 hover:underline">
                            Github Repo <TfiGithub className="ml-2 "/>
                        </p>
                    </Link>

                    <Link target="_blank" href={"https://vastukaar.netlify.app/"}>
                        <p className="flex items-center leading-relaxed text-blue-500 hover:underline">
                            View Project <FaExternalLinkSquareAlt className="ml-2" />
                        </p>
                    </Link>
                    </span>
                </div>
                </div>
                </div>

                {/* Simple Task Manager */}
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                    <Image
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src={TaskManagerPic}
                    />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    React App
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Task Manager
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                    Simple Task Manager is a React-based web application that allows users to manage tasks efficiently. 
                    </p>
                    
                    <span className="flex space-x-4 items-center mt-3">
                    <Link target="_blank" href={"https://github.com/Ayush76a/SimpleTaskManager"}>
                        <p className="flex items-center leading-relaxed text-blue-500 hover:underline">
                            Github Repo <TfiGithub className="ml-2 "/>
                        </p>
                    </Link>

                    <Link target="_blank" href={"https://ayush76a.github.io/SimpleTaskManager/"}>
                        <p className="flex items-center leading-relaxed text-blue-500 hover:underline">
                            View Project <FaExternalLinkSquareAlt className="ml-2" />
                        </p>
                    </Link>
                    </span>
                </div>
                </div>
                </div>


            {/* Portfolio */}
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                    <Image
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src={PortfolioPic}
                    />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Next App
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Portfolio
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                    This is Portfolio website made with Next.js, Tailwind Css and TailBlocks.
                    </p>
                    
                    <span className="flex space-x-4 items-center mt-3">
                    <Link target="_blank" href={"https://github.com/Ayush76a/portfolio"}>
                        <p className="flex items-center leading-relaxed text-blue-500 hover:underline">
                            Github Repo <TfiGithub className="ml-2 "/>
                        </p>
                    </Link>

                    <Link target="_blank" href={"https://messrelay.netlify.app/"}>
                        <p className="flex items-center leading-relaxed text-blue-500 hover:underline">
                            View Project <FaExternalLinkSquareAlt className="ml-2" />
                        </p>
                    </Link>
                    </span>
                </div>
                </div>
                </div>

                {/* LuV Calculator */}
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                    <Image
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src={CalculatorPic}
                    />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Basic Web App
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Luv Calculator
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                    A luv percentage calculator made using HTML, CSS, Javascript.
                    </p>
                    
                    <span className="flex space-x-4 items-center mt-3">
                    <Link target="_blank" href={"https://github.com/Ayush76a/luvCalculator"}>
                        <p className="flex items-center leading-relaxed text-blue-500 hover:underline">
                            Github Repo <TfiGithub className="ml-2 "/>
                        </p>
                    </Link>

                    <Link target="_blank" href={"https://ayush76a.github.io/luvCalculator/"}>
                        <p className="flex items-center leading-relaxed text-blue-500 hover:underline">
                            View Project <FaExternalLinkSquareAlt className="ml-2" />
                        </p>
                    </Link>
                    </span>
                </div>
                </div>
                </div>

            </div>
        </div>
        </section>
    </div>
  )
}

export default Project