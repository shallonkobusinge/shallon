import { Image } from "../components/Image";
import Header from "../components/Header";
import List from "../components/List";

export default function About() {
  return (
    <div>
      <div className="xl:h-screen w-full lg:py-[4rem]">
        <Header title="About" optionalTitle="Me." color="white" />
        <div className="xl:p-10 flex flex-col lg:w-24 xl:w-full xl:flex-row xl:gap-12 justify-center">
          <Image
            url="/images/portrait.png"
            alt="Shallon Kobusinge"
            props="object-cover xl:w-72 xl:h-72 mx-auto xl:mx-0 rounded-md  xl:rounded-[100%]"
          />

          <div className="mx-2 xl:w-2/4 w-screen flex flex-col ">
            <div className="flex gap-2 ">
              <div className="w-[1rem] xl:h-[8rem] bg-primary p-1"></div>
              <div>
                <p className=" w-screen xl:w-11/12 ">
                  Passionate about computer science, driven by exploring
                  opportunities and solving complex problems, I constantly seek
                  new challenges and push boundaries by creating cutting-edge
                  software and applications. I am currently pursuing a Computer
                  Science degree with a minor in Information and Data Science at
                  California Institute of Technology. When are am not occupied
                  with pursuing my career, I enjoy spending time with family and
                  friends.
                </p>
              </div>
            </div>
            <div className="p-4 ">
              <h2 className="text-sm mb-2 ">
                Here are a few technologies I've been working with recently:
              </h2>
              <div className="flex gap-10">
                <div>
                  <List title="React" />
                  <List title="NextJs" />
                  <List title="Python" />
                </div>
                <div>
                  <List title="C" />
                  <List title="NodeJs/Express" />
                  <List title="Java" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
