import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

const [showNamePopup, setShowNamePopup] = useState(true);
const [userName, setUserName] = useState('');
const [text, setText] = useState('');
const [messages, setMessages] = useState([]);

return (
    <ChatContext.Provider
    value={{
        showNamePopup, setShowNamePopup,
        userName, setUserName,
        text, setText,
        messages, setMessages

    }}>
        {children}
    </ChatContext.Provider>
)
    
}

export const useChat = () => useContext(ChatContext)