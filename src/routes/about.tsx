import {
  CaretRightFilled,
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
    <div>
      <div className="h-screen w-full lg:py-[4rem]">
        <Header title="About" optionalTitle="Me." color="white" />
        <div className="xl:p-10 flex flex-col w-24 xl:w-full xl:flex-row xl:gap-12 justify-center ">
          <Image
            url="/images/portrait.png"
            alt="Shallon Kobusinge"
            props="object-cover w-72 h-72 rounded-[100%]"
          />

          <div className=" mx-2 xl:w-2/4 w-screen flex justify-center items-center ml-10">
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
            <div>
              <ul>
                <li>
                  <CaretRightFilled />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
