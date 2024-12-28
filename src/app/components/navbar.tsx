import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

import logo from "../../../public/assets/photos/AV.png";
import { FaDownload } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='z-50 sticky top-0'>
        <header className=" bg-blue-50 text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <Image src={logo} alt={"logoImage"} width={40} height={40}/>
            
            <span className="ml-1 text-xl">Ayush</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 text-lg hover:text-gray-900">About</Link>
            <Link href={'#Project'} className="mr-5 text-lg hover:text-gray-900">Projects</Link>
            <Link href={'#Skills'} className="mr-5 text-lg hover:text-gray-900">Skills</Link>
            <Link href={'#Contact'} className="mr-5 text-lg hover:text-gray-900">Contact Me</Link>
            </nav>
            <a href="assets/Resume/resume.pdf">
             <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> 
                 Resume
                <FaDownload className='ml-1'/>
             </button>
            </a>
        </div>
        </header>
    </div>
  )
}

export default Navbar
