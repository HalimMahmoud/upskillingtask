import Logo from "../assets/Group 560.svg";
import { Experts, HelpMe } from "../components/Buttons";

export default function HeroSection() {
  return (
    <div className="h-[600px] md:h-[840px] sm:bg-cover lg:mb-5 lg:mx-5 bg-no-repeat bg-[url(./assets/Vector7.svg)] lg:bg-contain grid gap-0 md:gap-3">
      <img
        className="w-[50%] py-6 md:w-auto md:py-16 mx-auto"
        src={Logo}
        alt="logo"
      />
      <Experts />
      <div className="mx-auto text-[32px] md:text-[96px] font-thin text-center text-[#4F4F4F]">
        Lorem
      </div>
      <div className="mx-auto text-[32px] md:text-[96px] font-black md:mt-[-3rem]">
        Lorem lorem
      </div>
      <div className="mx-auto w-[350px] text-[16px] md:text-[18px] font-semibold md:w-[600px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the
      </div>
      <HelpMe />
    </div>
  );
}
