import { UIMain } from "../uikit/ui-main";
import { UIButton } from "../uikit/ui-button";
import Link from "next/link";

export function Home() {
  return (
    <UIMain className="flex flex-col items-center gap-8">
      <div className="text-4xl">Добро пожаловать в чат!</div>
      <Link href={"reg"}>
        <UIButton>Начать общение</UIButton>
      </Link>
    </UIMain>
  );
}
