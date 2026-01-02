import ChatWindow from "./Components/ChatWindow"
import JoinChatForm from "./Components/JoinChatForm"
import { ChatProvider } from "./ChatContext";


function App() {

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
