import React from 'react';
import profilepic from '../assets/profilePic.png';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div>
            <div className='my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>
                {/* About me and download CV */}
                <div className='flex-col my-auto mx-auto'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'>
                        Hi, I am Alok Khalkho
                    </p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                        <TypeAnimation
                            sequence={[
                                "Fullstack Dev",
                                1500,
                                "Fresher",
                                1500,
                                "Job Seeker",
                                1500,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <motion.div
                        className='flex justify-center items-center'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>
                            with a knowledge of Web Development
                        </p>
                    </motion.div>
                    <div className='text-5xl flex justify-start gap-16 my-7 text-purple-600'>
                        <a href='https://www.linkedin.com/in/alok-khalkho-753978202/' target='_blank' rel='noopener noreferrer'>
                            <AiFillLinkedin />
                        </a>
                        <a href='https://github.com/Alok371' target='_blank' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                        <a href='https://www.instagram.com/___al_ok___?igsh=eXR4OHJ5azljejd6' target='_blank' rel='noopener noreferrer'>
                            <AiFillInstagram />
                        </a>
                    </div>
                    <div className='relative inline-flex group my-3 animate-bounce'>
                        <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'>
                        </div>
                        <a href='https://drive.google.com/uc?export=download&id=1lErTt3swnwzHTiOhNj7h8wHxfkN3z0Kl' title='Download CV' role="button" className='w-[200px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900' >
                            Download CV
                        </a>
                    </div>
                </div>
                {/* Profile pic */}
                <div class='my-auto border-solid border-4 border-purple-500 rounded-full'>
                    <img class='w-full max-w-[300px] sm:max-w-[500px] max-h-[300px] sm:max-h-[500px] mx-auto object-cover rounded-full border-4 border-transparent'
                        src={profilepic} alt='profile pic' />
                </div>
            </div>
        </div>
    );
}

export default Hero;
