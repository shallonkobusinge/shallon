import { Link, NavLink } from "react-router-dom";
import { NavLinkRenderProps, NavLinkProps } from "../types/navigation";

export function NavTab({ name, route }: NavLinkRenderProps) {
  return (
    <>
      {/* <Link to={`${route}`}> */}
      <a href={`${route}`}>
        <div className="text-primary">{name}</div>
      </a>

      {/* {({ isActive }: NavLinkProps) => (
        <div className={isActive ? "text-primary" : ""}>{name}</div>
      )} */}
      {/* </Link> */}
    </>
  );
}
