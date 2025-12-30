import ChatWindow from "./Components/ChatWindow"
import JoinChatForm from "./Components/JoinChatForm"
import { ChatProvider } from "./ChatContext";
import { useEffect } from "react";
import { connectWs } from "./ws";
import { useRef } from "react";

function App() {
  const socket = useRef(null);
   
  useEffect(() => {
    socket.current = connectWs()
  },[])

  return (
    <ChatProvider>
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 p-4 font-inter">
    <JoinChatForm />
    <ChatWindow />
    </div>
    </ChatProvider>
  )
}

export default App
