import { useState } from "react";
import { ProjectProps } from "../types/common";
import { PROJECTS } from "../state/data";
import { Card } from "../components/card";

export default function Projects() {
  const [data] = useState<ProjectProps[]>(PROJECTS);
  return (
    <>
      <h1 className="text-center text-2xl Capitalize">Works</h1>
      <div className="flex flex-wrap mx-2 xl:mx-12 gap-10 ">
        {data.map(
          ({ title, description, imageUrl, siteLink, id }: ProjectProps) => (
            <div key={id}>
              <Card
                title={title}
                description={description}
                imageUrl={imageUrl}
                siteLink={siteLink}
              />
            </div>
          )
        )}
      </div>
    </>
  );
}
