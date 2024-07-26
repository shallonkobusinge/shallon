import { NavTab } from "./NavTab";
export function Navbar() {
  return (
    <div className="flex justify-between p-4 capitalize xl:py-6 xl:px-4 text-lg ">
      <h2 className="font-bold text-primary">SK</h2>
      <div className="flex gap-5 pr-2 xl:pr-4 cursor-pointer">
        <NavTab name="Home" route="/" />
        <NavTab name="About" route="#about" />
        <NavTab name="Works" route="#works" />
      </div>
    </div>
  );
}
