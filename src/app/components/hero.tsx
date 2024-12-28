"use client"
import React from 'react'
import profilePic from "../../../public/assets/photos/ProfilePic.png";
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';


const Hero = () => {
  return (
        <section className="text-gray-300 body-font bg-fixed bg-cover bg-center custom-image">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
                I am
                <br className="hidden lg:inline-block" />
                <Typewriter
                options={{
                    strings: ['an Aspiring Software Engineer', 'a Full-Stack Web Developer'],
                    autoStart: true,
                    loop: true,
                }}
                />
            </h1>
            <div className='w-[100px] h-[2px] bg-blue-300' ></div>
            <p className="mb-8 mt-5 leading-relaxed">
            My name is Ayush Vishwakarma, a skilled Full Stack Web Developer with a passion for building dynamic, user-friendly, and efficient web applications. Currently pursuing my final year of B.Tech at MNNIT Allahabad, I specialize in MERN Stack development, including technologies like React.js, Node.js, Express.js, MongoDB, and related tools.
            </p>
            
            <div className="flex justify-center">
                <Link href={'#Contact'}>
                   <button className="inline-flex mt-8 text-black bg-blue-100 border-0 py-2 
                    px-6 focus:outline-none hover:bg-blue-300 rounded text-lg">
                     Contact
                   </button>
                 </Link>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full">
            <Image
                className="object-cover object-center rounded"
                alt="hero"
                width={300}
                height={300}
                src={profilePic}
            />
            </div>
        </div>
        </section>
  )
}

export default Hero
