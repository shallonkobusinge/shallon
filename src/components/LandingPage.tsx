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
    <div className="">
      <div className=" flex justify-center  justify-evenly">
        <div className="flex flex-col w-2/6 gap-4  " id="primary-font">
          <span className="text-sm opacity-[0.6]">Hi, my name is</span>
          <h2 className="text-3xl">Shallon Kobusinge</h2>
          <p className="opacity-[0.9]">
            Building things with Technology. A Current Computer Science and Data
            Science College Student at California Institute of Technology.
          </p>
          <div className="flex mt-4">
            <Button
              label="Resume"
              borderColor="primary"
              background="white"
              props="text-black w-[6rem] h-10 border-[1.5px] rounded-md"
              textProps="text-sm"
              buttonState={ButtonState.Resume}
            />
            <div className="flex ml-2">
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

        <div className=" ">
          <div className="">
            <Image
              url="/images/portrait.png"
              alt="Shallon Kobusinge"
              props="w-3/4 h-60 rounded object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
