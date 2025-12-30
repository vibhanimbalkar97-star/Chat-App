import ChatHeader from './ChatHeader';
import ChatTextarea from './ChatTextarea';
import ChatMessageList from './ChatMessageList';
import { useChat } from '../ChatContext';


const ChatWindow = () => {

    const { showNamePopup } = useChat();          

    return (
        <>
            {!showNamePopup && (
                <div className='w-full max-w-2xl h-[90vh] bg-white rounded-xl shadow-md flex flex-col overflow-hidden'>
                    {/* Chat header */}
                    <ChatHeader  />

                    {/*Chat Message List  */}
                    <ChatMessageList />

                    {/* chat textarea */}
                    <ChatTextarea  />
                </div>
            )}
        </>
    )
}

export default ChatWindow