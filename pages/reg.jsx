import { Registration } from "../components/registration";

export default function RegPage({ nickname, setNickname }) {
  return (
    <div className="flex align-middle h-full">
      <Registration nickname={nickname} setNickname={setNickname} />
    </div>
  );
}
