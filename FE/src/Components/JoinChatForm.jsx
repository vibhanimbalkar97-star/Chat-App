import React, { useState } from 'react'

const JoinChatForm = () => {

    const [inputName, setInputName] = useState('');
    const handleNameSubmit = (e) => {
e.preventDefault();
const trimmed = inputName.trim();
if (!trimmed) return;
    }

  return (
    // Enter your name to start chatting
    <div className='flex items-center justify-center'>
        <div className='bg-white rounded-xl p-6 shadow-lg max-w-md'> 
            <h1 className='text-xl font-semibold text-black'>Enter your name</h1>
            <p className='text-sm text-gray-500 mt-1'>Enter your name to start cahtting. This will be used to identify</p>
            
            <form onSubmit={handleNameSubmit} className='mt-4'>
            <input
            autoFocus
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
            type='text'
            placeholder='Your name (e.g. Karan Sharma)' 
            className='w-full border border-gray-200 rounded-md px-3 py-2 outline-green-500 placeholder-gray-400'
            />
            <button
            type='submit'
            className='ml-auto mt-3 px-4 py-1.5 rounded-full bg-green-500 text-white font-medium cursor-pointer'>Continue</button>
            </form>
            
        </div>
    </div>
  )
}

export default JoinChatForm