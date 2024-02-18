import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div id='contact' className='flex justify-center my-5 h-full sm:h-[70vh] items-center'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2'>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around'
                    >
                        <h1 className='text-4xl sm:text-5xl text-white'>Contact <span>Me</span></h1>
                        <p className='text-normal text-lg text-gray-400 mt-2'>
                            Let's connect on LinkedIn <br /> or send me an Email
                        </p>
                    </motion.div>

                    <form
                        action='https://getform.io/f/zbqOvGep'
                        method='post'
                        className='flex flex-col justify-center max-w-[700px]'
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='flex flex-col'
                        >
                            <input
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white'
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className='flex flex-col'
                        >
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white'
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className='flex flex-col'
                        >
                            <textarea
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Message"
                                className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white'
                            ></textarea>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            type='submit'
                            className='bg-primary-color text-white py-3 px-6 rounded-lg mt-3'
                        >
                            Send
                        </motion.button>

                    </form>

                </div>
            </div>
        </div >
    );
}

export default Contact;
