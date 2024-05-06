import clsx from "clsx";

export function UIMain({ children, className }) {
  return (
    <div
      className={clsx(
        "bg-slate-800 m-auto w-[800px] rounded-[20px] px-16 py-12",
        className
      )}
    >
      {children}
    </div>
  );
}
