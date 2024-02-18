import React from 'react';
import { FaGithubSquare, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-12 bg-gray-900 text-white py-8'>
            <div className='max-w-4xl mx-auto flex flex-col items-center'>
                <p className='my-5 text-gray-500'>
                    Thank you for visiting my portfolio! Connect with me on social media:
                </p>
                <div className='inline-flex text-gray-500 gap-4 text-3xl'>
                    <a href='https://github.com/yourusername' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
                        <FaGithubSquare />
                    </a>
                    <a href='https://instagram.com/yourusername' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
                        <FaInstagram />
                    </a>
                </div>
                <p className='mt-4 text-sm text-gray-500'>
                    Designed and developed by Alok &copy; {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
}

export default Footer;
