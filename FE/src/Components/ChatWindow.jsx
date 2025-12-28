import ChatHeader from './ChatHeader';
import ChatTextarea from './ChatTextarea';
import ChatMessageList from './ChatMessageList';
import { useState } from 'react';

const ChatWindow = ({ showNamePopup, userName }) => {

         const [text, setText] = useState('');
          const [messages, setMessages] = useState([]);

    return (
        <>
            {!showNamePopup && (
                <div className='w-full max-w-2xl h-[90vh] bg-white rounded-xl shadow-md flex flex-col overflow-hidden'>
                    {/* Chat header */}
                    <ChatHeader userName={userName} />

                    {/*Chat Message List  */}
                    <ChatMessageList userName={userName}  messages={messages} />

                    {/* chat textarea */}
                    <ChatTextarea text={text} setText={setText} setMessages={setMessages} />
                </div>
            )}
        </>
    )
}

export default ChatWindow