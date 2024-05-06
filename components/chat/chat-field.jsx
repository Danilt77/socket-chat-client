import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "./chat-message";

export function ChatField({ nickname, messages, setMessages, socket }) {
  const [messageText, setMessageText] = useState();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleChange = (event) => {
    setMessageText(event.target.value);
  };
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  const sendMessage = () => {
    // messageText &&
    //   setMessages((lastMessages) => [
    //     ...lastMessages,
    //     { text: messageText, isMine: true },
    //   ]);
    socket.emit("sendMessage", { message: messageText, nickname });
    setMessageText("");
  };
  const handleKeyDown = (event) => {
    event.key === "Enter" && sendMessage();
  };

  return (
    <div className="pl-4 w-full h-full border-l border-l-slate-700 flex flex-col">
      <div className="bg-slate-700 h-full rounded-t-lg p-4 flex flex-col gap-2 overflow-auto">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            isMine={message.isMine}
            nickname={message.nickname}
          >
            {message.text}
          </ChatMessage>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <input
        type="text"
        className="text-slate-950 w-full rounded-b-lg px-2"
        value={messageText || ""}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
