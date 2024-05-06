import clsx from "clsx";

export function UIButton({ children, className }) {
  return (
    <div
      className={clsx(
        "bg-white text-slate-950 hover:bg-slate-200 transition-colors w-fit px-8 py-2 rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
}
