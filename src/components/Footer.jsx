import React from 'react';
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-12 bg-gray-900 text-white py-8'>
            <div className='max-w-4xl mx-auto flex flex-col items-center text-center'>
                <p className='my-5 text-gray-500'>
                    Thank you for visiting! Let's Connect on social media:
                </p>
                <div className='flex justify-center gap-4'>
                    <a href='https://github.com/Alok371' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
                        <FaGithubSquare className='text-2xl md:text-3xl' />
                    </a>
                    <a href='https://www.instagram.com/___al_ok___?igsh=eXR4OHJ5azljejd6' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
                        <FaInstagram className='text-2xl md:text-3xl' />
                    </a>
                    <a href='https://www.linkedin.com/in/alok-khalkho-753978202/' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
                        <FaLinkedin className='text-2xl md:text-3xl' />
                    </a>
                </div>
                <p className='mt-4 text-xs md:text-sm text-gray-500'>
                    Designed and developed by Alok &copy; {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
}

export default Footer;
