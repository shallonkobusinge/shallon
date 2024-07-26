import { HeaderProps } from "../types/common";

export default function Header({ title, optionalTitle, color}: HeaderProps) {
  return (
    <div>
      <h1 className="font-extrabold text-[40px] text-center">
        {title} <span className={`text-${color}`}>{optionalTitle}</span>
      </h1>
    </div>
  );
}
