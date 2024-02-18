import React from 'react';
import { motion } from 'framer-motion';

{/* <h1 className='text-4xl sm:text-5xl text-white text-center mb-12'>My <span>Education</span></h1> */ }
const Education = () => {
    return (
        <div id='education' className='py-16 bg-gray-900'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h1 className='text-4xl sm:text-5xl text-white text-center mb-12'>My <span>Education</span></h1>
                <div className='space-y-12'>
                    <motion.div
                        className='bg-gray-800 rounded-xl p-6 shadow-lg'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className='text-2xl font-semibold text-white mb-2'>Master of Computer Applications</h3>
                        <p className='text-gray-300 mb-2'>National Institute of Technology, Tiruchirappalli</p>
                        <p className='text-gray-400'>(2020 - 2023)</p>
                    </motion.div>
                    <div className='h-2 w-16 bg-gray-700 mx-auto'></div>
                    <motion.div
                        className='bg-gray-800 rounded-xl p-6 shadow-lg'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className='text-2xl font-semibold text-white mb-2'>BSc Computer Science</h3>
                        <p className='text-gray-300 mb-2'>Gayatri College, Rourkela</p>
                        <p className='text-gray-400'>(2017 - 2020)</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Education;
