import { useState } from "react";
import { ProjectProps } from "../types/common";
import { PROJECTS } from "../state/data";
import { Card } from "../components/card";
import Header from "../components/Header";

export default function Projects() {
  const [data] = useState<ProjectProps[]>(PROJECTS);
  return (
    <div className="h-screen w-full xl:py-24">
      <Header title="Works" />
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
      <div className="xl:p-10 m-4 lg:m-0 flex self-end">
        <h1 className="text-xs self-end">© Shallon Kobusinge 2024</h1>
      </div>
    </div>
  );
}
