import React from 'react';
import { motion } from 'framer-motion';
import htmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.svg';
import jsLogo from '../assets/js.svg';
import reactLogo from '../assets/reactjs.svg';
import nodeLogo from '../assets/nodejs.svg';
import mongodbLogo from '../assets/mongodb.svg';
import mySqlLogo from '../assets/mysql.svg';
import pythonLogo from '../assets/python.svg';

const Skills = () => {
    return (
        <motion.div
            className=" text-white bg-[#232325] h-auto flex flex-col items-center justify-center gap-8 py-10 md:py-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className='text-4xl sm:text-5xl text-white text-center mb-8'><span>Skills</span></h1>
            <div className="grid grid-cols-4 gap-8 md:gap-20">
                <div className="flex flex-col items-center justify-center">
                    <img src={htmlLogo} alt="HTML Logo" className="w-24 h-24 md:w-32 md:h-32 mb-2" />
                    <p className="text-white text-lg">HTML</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={cssLogo} alt="CSS Logo" className="w-24 h-24 md:w-32 md:h-32 mb-2" />
                    <p className="text-white text-lg">CSS</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={jsLogo} alt="JavaScript Logo" className="w-24 h-24 md:w-32 md:h-32 mb-2" />
                    <p className="text-white text-lg">JavaScript</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={reactLogo} alt="React Logo" className="w-24 h-24 md:w-32 md:h-32 mb-2" />
                    <p className="text-white text-lg">React</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={nodeLogo} alt="Node.js Logo" className="w-24 h-24 md:w-32 md:h-32 mb-2" />
                    <p className="text-white text-lg">Node.js</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={mongodbLogo} alt="MongoDB Logo" className="w-24 h-24 md:w-32 md:h-32 mb-2" />
                    <p className="text-white text-lg">MongoDB</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={mySqlLogo} alt="MySQL Logo" className="w-24 h-24 md:w-32 md:h-32 mb-2" />
                    <p className="text-white text-lg">MySQL</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={pythonLogo} alt="Python Logo" className="w-24 h-24 md:w-32 md:h-32 mb-2" />
                    <p className="text-white text-lg">Python</p>
                </div>
            </div>
        </motion.div>
    );
}

export default Skills;
