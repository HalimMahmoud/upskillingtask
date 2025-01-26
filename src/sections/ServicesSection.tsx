import ServiceImage from "../assets/Group 534.svg";
import Service1 from "../assets/Rectangle 250.png";
import Service2 from "../assets/Rectangle 250-1.png";
import Service3 from "../assets/Rectangle 250-2.png";
import Service from "../components/Service";
import { HelpMe } from "../components/Buttons";

export default function ServicesSection() {
  return (
    <div className="">
      <div className="h-full">
        <img
          src={ServiceImage}
          className="py-12 mx-auto w-[35%] lg:w-auto"
          alt="services"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto justify-items-center container">
          <Service Image={Service1} />
          <Service Image={Service2} />
          <div className="xl:m-0 xl:col-span-1 lg:col-span-2 lg:mt-5">
            <Service Image={Service3} />
          </div>
        </div>

        <HelpMe />
      </div>
    </div>
  );
}
