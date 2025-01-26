import AboutImage from "../assets/Rectangle263.png";
import { HelpMe } from "../components/Buttons";

export default function AboutUsSection() {
  return (
    <div className="h-full xl:h-[840px] bg-no-repeat bg-left-top bg-[#99b2f3] bg-[url(./assets/Rectangle262.png)] bg-contain">
      <div className="h-full pb-10 bg-no-repeat bg-right-bottom xl:bg-right-top bg-[url(./assets/Vector8.png)] xl:bg-contain">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          <div className="w-full">
            <div
              className="m-5 xl:m-25 text-[32px] lg:text-[64px] font-black text-white lg:w-auto"
              style={{ textShadow: "4px 0px 20px  #00000026" }}
            >
              About Us
              <div className="text-[18px] font-bold w-auto xl:w-[600px] mt-2 lg:mt-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an
              </div>
              <img
                src={AboutImage}
                className="mx-auto my-6 lg:mx-0"
                alt="about us image"
              />
            </div>
          </div>
          <div className="">
            <div
              className=" text-[32px] lg:text-[64px] p-0 m-5 xl:mr-25 lg:pt-35 font-black text-white lg:text-right"
              style={{ textShadow: "4px 0px 20px  #00000026" }}
            >
              Where
              <div className="text-[18px] font-semibold w-auto lg:w-[450px] mt-2 lg:mt-8 mr-0 ml-auto 2xl:w-[600px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
        </div>
        <HelpMe className="bg-[#EEC04B] hover:bg-[#d0980b]" />
      </div>
    </div>
  );
}
