import { createContext, useContext, useState, useEffect, useRef  } from "react";
import { connectWs } from "./ws";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

  const socket = useRef(null);
const [showNamePopup, setShowNamePopup] = useState(true);
const [userName, setUserName] = useState('');
const [text, setText] = useState('');
const [messages, setMessages] = useState([]);

// connect websocket once
  useEffect(() => {
    socket.current = connectWs()

    socket.current.on('connection', () => {
      
    })
  },[])

return (
    <ChatContext.Provider
    value={{
      socket,
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