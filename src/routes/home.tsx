import Projects from "./projects";
import About from "./about";
import LandingPage from "../components/LandingPage";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <div id="about">
        <About />
      </div>
      <div id="works">
        <Projects />
      </div>
    </div>

    // <div>
    //   <div className="xl:p-10 flex flex-col w-24 xl:w-full xl:flex-row xl:gap-12 justify-between">
    //     <div className="flex flex-col gap-24 xl:w-2/4">
    //       <div className="mx-6 mt-4 xl:mt-0 xl:mx-0 w-[20rem] h-[10rem] xl:w-[35rem] xl:h-[27rem] relative">
    //         <div className=" absolute w-[20rem] h-[10rem] xl:w-[100%] xl:h-[100%] bg-primary top-0 left-0 "></div>
    //         <div className="xl:w-[100%] xl:h-[100%] absolute top-0 left-0 m-4 xl:m-14  z-10">
    //           <Image
    //             url="/images/portrait.png"
    //             alt="Shallon Kobusinge"
    //             props="w-full h-full object-cover"
    //           />
    //         </div>
    //       </div>
    //       <div className="xl:py-10 flex flex-col xl:flex-row p-4 xl:p-0 gap-10">
    //         <Button
    //           label="Meet me"
    //           borderColor="none"
    //           background="primary"
    //           props="text-white"
    //           buttonState={ButtonState.Hire}
    //         />
    //         <Button
    //           label="Resume"
    //           borderColor="primary"
    //           background="white"
    //           props="text-black"
    //           buttonState={ButtonState.Resume}
    //         />
    //       </div>
    //     </div>

    //     <div className=" mx-2 xl:w-2/4 w-screen">
    //       <h1 className="font-extrabold text-[70px]">
    //         About <span className="text-primary">Me.</span>
    //       </h1>
    //       <div className="flex gap-2 ">
    //         <div className="w-[1rem] h-[8rem] bg-primary p-1"></div>
    //         <div>
    //           <p className=" w-screen xl:w-11/12 ">
    //             Passionate about computer science, driven by exploring
    //             opportunities and solving complex problems, I constantly seek
    //             new challenges and push boundaries by creating cutting-edge
    //             software and applications. I am currently pursuing a Computer
    //             Science degree with a minor in Information and Data Science at
    //             California Institute of Technology. When are am not occupied
    //             with pursuing my career, I enjoy spending time with family and
    //             friends.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex flex-col pt-12">
    //         <h1 className=" text-primary text-xl mb-4">Let's connect.</h1>
    //         <div className="flex flex-col gap-2">
    //           <Icon
    //             title="X"
    //             icon={<TwitterOutlined />}
    //             url="https://twitter.com/Shallon_Kob"
    //           />
    //           <Icon
    //             title="Github"
    //             icon={<GithubOutlined />}
    //             url="https://github.com/shallonkobusinge"
    //           />
    //           <Icon
    //             title="Instagram"
    //             icon={<InstagramOutlined />}
    //             url="https://www.instagram.com/shallo_n/"
    //           />
    //           <Icon
    //             title="kobshallon041@gmail.com"
    //             icon={<MailOutlined />}
    //             url="/"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div id="about">
    //     <About/>
    //   </div>
    //   <div id="works">
    //     <Projects />
    //   </div>
    // </div>
  );
}
