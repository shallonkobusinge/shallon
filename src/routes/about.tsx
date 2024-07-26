import {
  GithubOutlined,
  InstagramOutlined,
  MailOutlined,
  TwitchOutlined,
} from "@ant-design/icons";
import { Icon } from "../components/Icon";
import { Image } from "../components/Image";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header title="About" optionalTitle="Me." />
      <div className="xl:p-10 flex flex-col w-24 xl:w-full xl:flex-row xl:gap-12 justify-between">
        <div className="flex flex-col gap-24 xl:w-2/4">
          <div className="mx-6 mt-4 xl:mt-0 xl:mx-0 w-[20rem] h-[10rem] xl:w-[35rem] xl:h-[27rem] relative">
            <div className=" absolute w-[20rem] h-[10rem] xl:w-[100%] xl:h-[100%] bg-primary top-0 left-0 "></div>
            <div className="xl:w-[100%] xl:h-[100%] absolute top-0 left-0 m-4 xl:m-14  z-10">
              <Image
                url="/images/portrait.png"
                alt="Shallon Kobusinge"
                props="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className=" mx-2 xl:w-2/4 w-screen">
          <div className="flex gap-2 ">
            <div className="w-[1rem] h-[8rem] bg-primary p-1"></div>
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
        </div>
      </div>
    </>
  );
}
