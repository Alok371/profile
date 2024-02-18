import React from 'react';
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
import { motion } from 'framer-motion';

const Project = () => {
    return (
        <div id='projects' className='py-6 max-w-[1200px] mx-auto'>
            <div className='mx-auto px-4 md:px-8'>
                <div className='mb-8'>
                    <h2 className='text-3xl lg:text-4xl text-white font-bold mb-2'>My <span className='text-primary-color'>Projects</span></h2>
                    <p className='text-gray-400'>Check out some of my projects below.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href='/'
                            className='group relative overflow-hidden rounded-lg shadow-lg transition duration-300 hover:shadow-xl'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img src={project.image} alt={project.title} className='h-48 md:h-80 w-full object-cover object-center transition duration-300 group-hover:opacity-75' />
                            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300'>
                                <p className='text-white font-bold text-lg'>{project.title}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}

const projects = [
    { title: 'Project 1', image: proj1 },
    { title: 'Project 2', image: proj2 },
    { title: 'Project 3', image: proj3 },
    { title: 'Project 4', image: proj4 }
];

export default Project;
