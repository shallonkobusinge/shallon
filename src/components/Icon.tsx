import { Link } from "react-router-dom";
import { IconProps } from "../types/common";
export function Icon({ title, icon, url }: IconProps) {
  return (
    <Link className="flex gap-4 " to={url}>
      <div className="w-8 h-8 rounded-full border border-primary items-center self-center text-center place-content-center text-md ">
        <p >{icon}</p>
      </div>
      <div className="pt-1">{title}</div>
    </Link>
  );
}