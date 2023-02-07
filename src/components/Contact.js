import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-[#c28688] to-[#d99787] flex justify-center items-center p-4'>
            <div className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-white'>Contact</p>
                    <p className='text-white py-4'>Send me a message</p>
                </div>
                <input className='bg-[#fff] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#fff]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#fff] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-cyan-500 hover:border-white px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </div>
        </div>
    )
}
export default Contact