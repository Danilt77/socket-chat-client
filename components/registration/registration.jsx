import { UIMain } from "../uikit/ui-main";
import { UIButton } from "../uikit/ui-button";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function Registration({ nickname, setNickname }) {
  const router = useRouter();
  const handleChange = (event) => {
    setNickname(event.target.value);
    localStorage.setItem("nickname", event.target.value);
  };

  const handleKeyDown = (event) => {
    event.key === "Enter" && nickname && router.replace("/chat");
  };

  useEffect(() => {
    setNickname(localStorage.getItem("nickname"));
  }, [nickname]);

  return (
    <UIMain className="flex flex-col items-center gap-8">
      <div className="text-4xl">Регистрация</div>
      <div className="flex gap-3">
        Введите ник:
        <input
          type="text"
          className="text-slate-950"
          value={nickname || ""}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Link href={"chat"}>
        {nickname && <UIButton>Войти как {nickname}</UIButton>}
      </Link>
    </UIMain>
  );
}
