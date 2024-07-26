import { NavLinkRenderProps } from "../types/navigation";

export function NavTab({ name, route }: NavLinkRenderProps) {
  return (
    <nav className=" ">
      <a href={`${route}`}>
        <div className="text-white">{name}</div>
      </a>
    </nav>
  );
}
