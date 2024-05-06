import { useRouter } from "next/router";
import { Chat } from "../components/chat";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://192.168.217.83:5000");

export default function ChatPage({ nickname, setNickname }) {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const router = useRouter();
  const [state, setState] = useState([]);
  useEffect(() => {
    if (!nickname) {
      !nickname && router.replace("/reg");
    } else {
      socket.emit("join", nickname);
      socket.emit("updateUsers");
      socket.on("showMessages", (messages) => {
        messages.map((message) => {
          setMessages((_messages) => [
            ..._messages,
            {
              text: message.message,
              isMine: message.user === nickname,
              nickname: message.user === nickname ? "Вы" : message.user,
            },
          ]);
        });
      });
    }
  }, [router, nickname]);

  useEffect(() => {
    socket.on("message", ({ data }) => {
      setState((_state) => [..._state, data]);
      setMessages((lastMessages) => [
        ...lastMessages,
        {
          text: data.message,
          isMine: data.user === nickname,
          nickname: data.user === nickname ? "Вы" : data.user,
        },
      ]);
    });
  }, []);

  useEffect(() => {
    socket.on("updateUsers", (users) => {
      setUsers(users);
    });
  }, [users]);

  return (
    <div className="flex align-middle h-full">
      <Chat
        nickname={nickname}
        setNickname={setNickname}
        messages={messages}
        setMessages={setMessages}
        socket={socket}
        users={users}
      />
    </div>
  );
}
