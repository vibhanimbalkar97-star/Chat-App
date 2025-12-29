const ChatHeader = ({ userName }) => {

    return (
        <div className='flex items-center gap-3 px-4 py-3 border-b border-gray-200'>
            <div className='h-10 w-10 rounded-full bg-[#075E54] flex items-center justify-center text-white font-semibold'>
                R
            </div>
            <div className='flex-1'>
                <div className='text-sm font-medium text-[#303030]'>
                    Realtime group chat
                </div>
                <div className='text-xs text-gray-500'>
                    Someone is typing...
                </div>
            </div>
            <div className='text-sm text-gray-500'>
                Signed in as {''}
                <span className='font-medium text-[#303030] capitalize'>
                    {userName}
                </span>
            </div>
        </div>
    )
}

export default ChatHeader