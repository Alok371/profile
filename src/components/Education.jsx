import React from 'react'

const Education = () => {
    return (
        <div className='py-10 bg-[#232325]'>
            <h2 className='mb-8 text-3xl text-white text-center'>My <span>Education</span></h2>
            <div className='mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
                <p>Master of Computer Applications</p>
                <p className='text-gray-400'>National Institute of Technology, Tiruchirappalli</p>
                <p className='text-gray-500'>(2020 - 2023)</p>
            </div>
            <div className='h-[50px] w-[2px] bg-slate-400 my-1 mx-auto'></div>
            <div className='mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
                <p>BSc Computer Science</p>
                <p className='text-gray-400'>Gayatri College, Rourkela</p>
                <p className='text-gray-500'>(2017-2020)</p>
            </div>


        </div>
    )
}

export default Education
