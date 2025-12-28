const ChatTextarea = ({ text, setText, setMessages }) => {

    // Send message function
    const sendMessage = () => {
        const t = text.trim();
        if (!t) return;

        // user message
        const msg = {
            id: Date.now(),
            sender: userName,
            text: t,
            ts: Date.now(),
        };
        setMessages((m) => [...m, msg])
        setText('');
    }

    // Handle enter key to send message
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.ShiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }

    return (
        <div className='px-4 py-3 border-gray-200 bg-white'>
            <div className='flex items-center justify-between gap-4 border border-gray-200 rounded-full'>
                <textarea
                    rows={1}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder='Type a message...'
                    className='w-full resize-none px-4 py-4 text-sm outline-none'
                />
                <button
                    onClick={sendMessage}
                    className='bg-green-500 text-white px-4 py-2 mr-2 rounded-full text-sm font-medium cursor-pointer'>
                    Send
                </button>
            </div>
        </div>
    )
}

export default ChatTextarea