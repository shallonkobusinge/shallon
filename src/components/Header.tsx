import { HeaderProps } from "../types/common";

export default function Header({ title, optionalTitle }: HeaderProps) {
  return (
    <div>
      <h1 className="font-extrabold text-[40px] text-center">
        {title} <span className="text-primary">{optionalTitle}</span>
      </h1>
    </div>
  );
}
