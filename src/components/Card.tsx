import Ellispe from "../assets/Ellipse 1.png";
import Rating from "./Rating";

export default function Card({ place }: { place: string }) {
  const style = `m-5 bg-white xl:w-[580px] rounded-[30px] shadow-[0_10px_30px_rgba(16,51,30,0.1)] h-fit ${
    place === "right" ? "place-self-end" : "place-self-start"
  } flex border-[#6D91EE] border`;

  return (
    <div className={`${style}`}>
      <img
        src={Ellispe}
        className="mx-auto w-fit h-fit p-5"
        alt="about us image"
      />
      <div className="py-5 pr-5">
        <div className="text-[16px] font-black bg-white text-[#6D91EE] w-full">
          Courtney Henry
        </div>
        <div className="text-[14px] font-normal mt-2 text-[#22366A] w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </div>
        <Rating />
      </div>
    </div>
  );
}
