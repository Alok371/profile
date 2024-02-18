import React from 'react';
import aboutImg from '../assets/about4.jpeg';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className='py-10 text-white bg-[#232325] h-auto' id='about'>
            <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
                <div>
                    <div className='w-[400px] h-full'>
                        <img
                            src={aboutImg} alt=""
                            className='object-cover rounded-xl h-[300px] filter grayscale brightness-50'
                        />
                    </div>
                </div>
                <div>
                    <div className='p-2'>
                        <div className='text-gray-300 my-3'>
                            <h3 className='text-4xl font-semibold mb-5'>About <span >Me</span></h3>
                            <motion.p
                                className='text-justify leading-7 w-11/12 mx-auto'
                                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                I am an MCA graduate from NIT Trichy who is enthusiastic about Web Development. I am eager to use my technical skills, problem-solving abilities, and academic achievements to make a positive impact in a forward-thinking organization and start a fulfilling career journey.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
