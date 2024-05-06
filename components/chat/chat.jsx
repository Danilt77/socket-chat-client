import { UIMain } from "../uikit/ui-main";
import { ChatField } from "./chat-field";
import { ChatList } from "./chat-list";

export function Chat({ nickname, messages, setMessages, socket, users }) {
  return (
    <UIMain className="flex h-[480px]">
      <ChatList users={users} />
      <ChatField
        nickname={nickname}
        messages={messages}
        setMessages={setMessages}
        socket={socket}
      />
    </UIMain>
  );
}
