import React, { useState } from 'react';
import proj1 from '../assets/imhs.jpg';
import proj2 from '../assets/recipe.jpg';
import proj3 from '../assets/doormed.jpg';
import proj4 from '../assets/ichat.jpg';
import { motion } from 'framer-motion';

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseDescription = () => {
        setSelectedProject(null);
    };

    return (
        <div id='projects' className='py-6 max-w-[1200px] mx-auto'>
            <div className='mx-auto px-4 md:px-8'>
                <div className='mb-8'>
                    <h2 className='text-3xl lg:text-4xl text-white font-bold mb-2'>My <span className='text-primary-color'>Projects</span></h2>
                    <p className='text-gray-400'>Check out some of my projects below.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {projects.map((project, index) => (
                        <div key={index} className='group'>
                            <motion.div
                                className='relative overflow-hidden rounded-lg shadow-lg transition duration-300 hover:shadow-xl'
                                whileHover={!isSmallScreen && { scale: 1.05 }}
                                whileTap={!isSmallScreen && { scale: 0.95 }}
                                onClick={() => handleProjectClick(project)}
                            >
                                <img src={project.image} alt={project.title} className='h-48 md:h-80 w-full object-cover object-center transition duration-300 group-hover:opacity-75' />
                                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300'>
                                    <h3 className='font-bold text-lg md:text-xl lg:text-2xl text-white text-center'>{project.title}</h3>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedProject && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-8 rounded-lg max-w-md'>
                        <h3 className='font-bold text-lg md:text-xl lg:text-2xl mb-4'>{selectedProject.title}</h3>
                        <p className='text-gray-600'>{selectedProject.description}</p>
                        <button className='mt-4 bg-primary-color text-white px-4 py-2 rounded-md hover:bg-opacity-80' onClick={handleCloseDescription}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

const projects = [
    { title: 'Interactive Mobile Heathcare Service', image: proj1, description: 'A mobile healthcare service application that allows users to interact with healthcare providers, book appointments, and access medical resources.', link: 'https://example.com/project1' },
    { title: 'Recipe sharing app', image: proj2, description: 'An app for sharing and discovering recipes with other users. Users can upload their own recipes, browse recipes shared by others, and save their favorite recipes.', link: 'https://example.com/project2' },
    { title: 'DoorMed', image: proj3, description: 'An online pharmacy platform that enables users to order prescription medications and healthcare products from the comfort of their homes. Includes features such as medication reminders and virtual consultations.', link: 'https://github.com/Alok371/DoorMed/tree/master' },
    { title: 'iChat', image: proj4, description: 'A messaging application that allows users to communicate with each other in real-time through text messages, voice calls, and video calls. Supports group chats and multimedia sharing.', link: 'https://github.com/Alok371/iChat' }
];

// Function to check if the screen is small
const isSmallScreen = () => {
    return window.innerWidth <= 768; // Adjust breakpoint as needed
}

export default Project;
