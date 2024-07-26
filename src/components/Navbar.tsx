import { NavTab } from "./NavTab";
export function Navbar() {
  return (
    <div className="flex justify-between z-40 p-4 capitalize xl:py-6 xl:px-4 text-lg  fixed bg-black w-full ">
      <div>
        <h2 className="font-bold ">SK</h2>
      </div>
      <div className="flex gap-5 pr-2 xl:pr-4 cursor-pointer ml-10">
        <NavTab name="Home" route="/" />
        <NavTab name="About" route="#about" />
        <NavTab name="Works" route="#works" />
      </div>
    </div>
  );
}
