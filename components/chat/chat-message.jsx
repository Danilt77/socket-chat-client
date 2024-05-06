import clsx from "clsx";

export function ChatMessage({ children, isMine, nickname }) {
  let messageStyle = isMine
    ? "max-w-72 w-fit bg-slate-800 rounded-l-[20px] rounded-br-[20px] ml-auto"
    : "max-w-72 w-fit bg-slate-950 rounded-r-[20px] rounded-bl-[20px]";
  const isChat = nickname === "CHAT";
  if (isChat) messageStyle = "max-w-full text-center";
  return (
    <div>
      <div
        className={clsx(
          "text-sm w-fit text-ellipsis overflow-hidden max-w-72",
          isMine && "ml-auto",
          isChat && "hidden"
        )}
      >
        {nickname}
      </div>
      <div className={clsx("px-4 py-2 break-words", messageStyle)}>
        {children}
      </div>
    </div>
  );
}
