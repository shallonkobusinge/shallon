import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { ButtonState } from "../enums/common";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Image } from "./Image";

export default function LandingPage() {
  return (
    <div className="xl:h-screen w-full xl:py-12">
      <div className=" flex xl:flex-row flex-col justify-center xl:h-[40rem] xl:py-[5rem] gap-24 xl:gap-0 ">
        <div className="flex flex-col xl:w-2/4">
          <div className="mx-6 mt-4 xl:mt-0 xl:mx-0 w-[20rem] h-[10rem] xl:w-[35rem] xl:h-[27rem] relative">
            <div className=" absolute w-[20rem] h-[10rem] xl:w-[100%] xl:h-[100%] bg-primary top-0 left-0 rounded "></div>
            <div className="xl:w-[100%] xl:h-[100%] absolute top-0 left-0 m-4 xl:m-14 z-10">
              <Image
                url="/images/portrait.png"
                alt="Shallon Kobusinge"
                props="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:w-2/6 gap-4 gap-10 xl:py-10 mx-4 xl:mx-0 " id="primary-font">
          <span className="text-sm opacity-[0.6]">Hi, my name is</span>
          <h2 className="text-5xl font-medium">Shallon Kobusinge</h2>
          <h2 className="text-4xl opacity-[0.6]">I build things with Technology</h2>
          <p className="opacity-[0.9]">
            A Current Computer Science and Data
            Science College Student at California Institute of Technology.
          </p>
          <div className="flex my-6 xl:flex-row flex-col p-3 xl:p-0">
            <Button
              label="Resume"
              borderColor="white"
              background="black"
              props="text-black w-[6rem] h-10 border-[1.5px] rounded-md"
              textProps="text-sm"
              buttonState={ButtonState.Resume}
            />
            <div className="flex xl:ml-4 mt-4 xl:mt-0 ">
              <Icon
                icon={<TwitterOutlined />}
                url="https://twitter.com/Shallon_Kob"
              />
              <Icon
                icon={<GithubOutlined />}
                url="https://github.com/shallonkobusinge"
              />
              <Icon
                icon={<LinkedinOutlined />}
                url="https://www.linkedin.com/in/shallon-kobusinge-701453186/"
              />
              <Icon
                icon={<InstagramOutlined />}
                url="https://www.instagram.com/shallo_n/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
