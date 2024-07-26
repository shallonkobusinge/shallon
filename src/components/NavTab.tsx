import { Link, NavLink } from "react-router-dom";
import { NavLinkRenderProps, NavLinkProps } from "../types/navigation";

export function NavTab({ name, route }: NavLinkRenderProps) {
  return (
    <nav className=" ">
      {/* <Link to={`${route}`}> */}
      <a href={`${route}`}>
        <div className="text-white">{name}</div>
      </a>

      {/* {({ isActive }: NavLinkProps) => (
        <div className={isActive ? "text-primary" : ""}>{name}</div>
      )} */}
      {/* </Link> */}
    </nav>
  );
}
