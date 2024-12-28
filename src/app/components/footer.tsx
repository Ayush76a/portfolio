import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from 'next/image';

import foot from "../../../public/assets/photos/AV.png";


const Footer = () => {
  return (
    <div>
        <footer className=" bg-blue-50 text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
            {/* img */}
            <Image src={foot} alt={"FooterImage"} width={28} height={28}/>

            <span className="ml-3 text-xl">Ayush Vishwakarma</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Ayush Vishwakarma
            </p>

            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link target='_blank' href={"https://www.linkedin.com/in/ayush-vishwakarma-76abc/"} className="text-gray-500">
                <FaLinkedin className='text-3xl hover:text-[#0a84f0]' />
            </Link>
            <Link target='_blank' href={"https://github.com/Ayush76a"} className="ml-3 text-gray-500">
               <FaSquareGithub className='text-3xl hover:text-[#f70c24]' />
            </Link>
            <Link target='_blank' href={"https://x.com/Sphinx__A"} className="ml-3 text-gray-500">
                <FaSquareXTwitter className='text-3xl hover:text-[#1c1c1a]' />
            </Link>
            </span>

        </div>
        </footer>
    </div>
  )
}

export default Footer