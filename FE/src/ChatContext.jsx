import { createContext, useContext, useState, useEffect, useRef } from "react";
import { connectWs } from "./ws";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

  const timer = useRef(null);
  const socket = useRef(null);
  const [showNamePopup, setShowNamePopup] = useState(true);
  const [userName, setUserName] = useState('');
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const [typers, setTypers] = useState([]);

  // connect websocket once
  useEffect(() => {
    socket.current = connectWs()

    // on connect
    socket.current.on('connect', () => {

      // someone joined
      socket.current.on('roomNotice', (userName) => {
      })

      // receive messages
      socket.current.on('chatMessage', (msg) => {
        setMessages((prev) => [...prev, msg])
      })

      // someone is typing
      socket.current.on('typing', (userName) => {
        setTypers((prev) => {
          if (prev.includes(userName)) return prev;
          return [...prev, userName]
        })

      })

      // stop typing
      socket.current.on('stopTyping', (userName) => {
        setTypers(typers.filter((typer) => typer !== userName))
      })
    })

    // remove listener
    socket.current.off('roomNotice');
    socket.current.off('chatMessage');
    socket.current.off('typing');
    socket.current.off('stopTyping');

  }, [])


  // ------- EMIT "typing" WHEN USERS TYPE -------
  useEffect(() => {
    if (text) {
      socket.current.emit('typing', userName)
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      socket.current.emit('stopTyping', userName)
    }, 1000)

    return () => {
      clearTimeout(timer.current)
    }
  }, [text, userName])


  return (
    <ChatContext.Provider
      value={{
        socket,
        showNamePopup, 
        setShowNamePopup,
        userName, 
        setUserName,
        text, 
        setText,
        messages, 
        setMessages,
        typers, 
        setTypers
      }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => useContext(ChatContext)