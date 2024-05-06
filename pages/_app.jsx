import "../styles/global.css";
import { Roboto } from "next/font/google";
import clsx from "clsx";
import { useState } from "react";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export default function App({ Component }) {
  const [nickname, setNickname] = useState();

  return (
    <div className={clsx(roboto.className, "bg-slate-950 h-screen text-white")}>
      <Component nickname={nickname} setNickname={setNickname} />
    </div>
  );
}
