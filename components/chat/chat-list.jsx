export function ChatList({ users }) {
  return (
    <div className="min-w-52 max-w-52 border-r-slate-700 pr-4">
      <div className="mb-2">Список пользователей:</div>
      <div className="bg-slate-700 p-2 rounded-lg max-w-full">
        {users.map((user, index) => (
          <div key={index} className="text-ellipsis overflow-hidden">
            {user}
          </div>
        ))}
      </div>
    </div>
  );
}
