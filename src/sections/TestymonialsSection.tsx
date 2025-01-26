import TestymonialsImage from "../assets/Group 537@2x.svg";
import Card from "../components/Card";

export default function TestymonialsSection() {
  return (
    <div className="">
      <div className="h-full">
        <img
          src={TestymonialsImage}
          className="py-12 mx-auto w-[45%] lg:w-auto"
          alt="testymonials"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full place-content-around gap-4 lg:mt-8 container mx-auto">
          <Card place="right" />
          <Card place="left" />
          <Card place="right" />
          <Card place="left" />
        </div>
      </div>
    </div>
  );
}
