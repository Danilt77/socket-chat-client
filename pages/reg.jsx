import Head from "next/head";
import { Registration } from "../components/registration";

export default function RegPage({ nickname, setNickname }) {
  return (
    <div className="flex align-middle h-full">
      <Head>
        <title>Регистрация</title>
      </Head>
      <Registration nickname={nickname} setNickname={setNickname} />
    </div>
  );
}
