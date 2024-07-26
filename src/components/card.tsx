import { Link } from "react-router-dom";
import { CardProps } from "../types/common";
import { Image } from "./Image";
export function Card({ title, description, siteLink, imageUrl }: CardProps) {
  return (
    <div className="flex flex-col  xl:p-4 gap-5 xl:w-[30rem] xl:h-[30rem]  cursor-pointer ">
      <div className="xl:w-[30rem] flex flex-col justify-center mx-2">
        <h1 className="uppercase text-primary text-xl">{title}</h1>
        <p>{description}</p>
      </div>
      <Link to={siteLink} className="underline text-primary">
        {`Visit ${title}`}
      </Link>
      <div className=" ">
        <Image
          url={imageUrl.url}
          alt={imageUrl.alt}
          props=" w-full h-full object-fit "
        />
      </div>
    </div>
  );
}