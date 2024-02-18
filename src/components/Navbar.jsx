import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    const handleLinkClick = () => {
        setNav(false); // Close the navbar when a link is clicked
    };
    return (
        <div className='z-10 text-gray-500 flex justify-between items-center max-w-[1280px] mx-auto h-24 px-4 text-l'>
            <h1 className='text-3xl font-bold primary-color ml-4'>Alok Khalkho</h1>
            <ul className='hidden md:flex'>
                <li className='p-5 cursor-pointer'>
                    <Link to='home' spy={true}
                        smooth={true}
                        offset={50}
                        duration={500} >
                        Home
                    </Link>
                </li>
                <li className='p-5 cursor-pointer'>
                    <Link to="about" spy={true}
                        smooth={true}
                        offset={50}
                        duration={500} >
                        About
                    </Link>
                </li>
                <li className='p-5 cursor-pointer'>
                    <Link to="projects" spy={true}
                        smooth={true}
                        offset={50}
                        duration={500} >
                        Projects
                    </Link>
                </li>
                <li className='p-5 cursor-pointer'>
                    <Link to="education" spy={true}
                        smooth={true}
                        offset={50}
                        duration={500} >
                        Education
                    </Link>
                </li>
                <li className='p-5 cursor-pointer'>
                    <Link to="contact" spy={true}
                        smooth={true}
                        offset={50}
                        duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500 ' : 'fixed left-[-100%]'}>
                <h1 className='text-3xl primary-color m-4'>Alok Khalkho</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2 cursor-pointer'><Link to="home" spy={true} smooth={true} offset={50} duration={500} onClick={handleLinkClick}>Home</Link></li>
                    <li className='p-2 cursor-pointer'><Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={handleLinkClick}>About</Link></li>
                    <li className='p-2 cursor-pointer'><Link to="projects" spy={true} smooth={true} offset={50} duration={500} onClick={handleLinkClick}>Project</Link></li>
                    <li className='p-2 cursor-pointer'><Link to="education" spy={true} smooth={true} offset={50} duration={500} onClick={handleLinkClick}>Education</Link></li>
                    <li className='p-2 cursor-pointer'><Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={handleLinkClick}>Contact</Link></li>
                </ul>
            </div>


        </div >
    )
}

export default Navbar
