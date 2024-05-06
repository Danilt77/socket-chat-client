import Head from "next/head";
import { Home } from "../components/home";

export default function HomePage() {
  return (
    <div className="flex align-middle h-full">
      <Head>
        <title>Добро пожаловать!</title>
      </Head>
      <Home />
    </div>
  );
}
