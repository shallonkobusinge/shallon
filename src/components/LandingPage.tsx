import {
  GithubOutlined,
  InstagramOutlined,
  MailOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { ButtonState } from "../enums/common";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Image } from "./Image";

export default function LandingPage() {
  return (
    <div className="h-screen w-full lg:py-12">
      <div className=" flex justify-center h-[40rem] py-[5rem] ">
        <div className="flex flex-col xl:w-2/4">
          <div className="mx-6 mt-4 xl:mt-0 xl:mx-0 w-[20rem] h-[10rem] xl:w-[35rem] xl:h-[27rem] relative">
            <div className=" absolute w-[20rem] h-[10rem] xl:w-[100%] xl:h-[100%] bg-primary top-0 left-0 rounded "></div>
            <div className="xl:w-[100%] xl:h-[100%] absolute top-0 left-0 m-4 xl:m-14  z-10">
              <Image
                url="/images/portrait.png"
                alt="Shallon Kobusinge"
                props="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-2/6 gap-4 gap-10 " id="primary-font">
          <span className="text-sm opacity-[0.6]">Hi, my name is</span>
          <h2 className="text-5xl font-medium">Shallon Kobusinge</h2>
          <p className="opacity-[0.9]">
            Building things with Technology. A Current Computer Science and Data
            Science College Student at California Institute of Technology.
          </p>
          <div className="flex my-6">
            <Button
              label="Resume"
              borderColor="white"
              background="black"
              props="text-black w-[6rem] h-10 border-[1.5px] rounded-md"
              textProps="text-sm"
              buttonState={ButtonState.Resume}
            />
            <div className="flex ml-4">
              <Icon
                icon={<TwitterOutlined />}
                url="https://twitter.com/Shallon_Kob"
              />
              <Icon
                icon={<GithubOutlined />}
                url="https://github.com/shallonkobusinge"
              />
              <Icon
                icon={<InstagramOutlined />}
                url="https://www.instagram.com/shallo_n/"
              />
            </div>
          </div>
        </div>

        {/* <div className=" ">
          <div className="">
            <Image
              url="/images/portrait.png"
              alt="Shallon Kobusinge"
              props="w-5/6 h-96 rounded object-cover"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
