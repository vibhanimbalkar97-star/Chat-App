import { useState } from "react";
import ChatWindow from "./Components/ChatWindow"
import JoinChatForm from "./Components/JoinChatForm"

function App() {
const [showNamePopup, setShowNamePopup] = useState(true);
const [userName, setUserName] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 p-4 font-inter">
 <JoinChatForm showNamePopup={showNamePopup} setShowNamePopup={setShowNamePopup} setUserName={setUserName}/>
 <ChatWindow showNamePopup={showNamePopup} userName={userName}  />
   
    </div>
  )
}

export default App
