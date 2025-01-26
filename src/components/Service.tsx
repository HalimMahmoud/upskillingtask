export default function Service({ Image }: { Image: string }) {
  return (
    <div className="my-5 bg-white w-[385px] rounded-[30px] shadow-[0_10px_30px_rgba(16,51,30,0.1)] h-fit">
      <img src={Image} className="mx-auto" alt="about us image" />
      <div className="p-5">
        <div className="text-[16px] font-black bg-white text-[#324473] w-full">
          Lorem Ipsum
        </div>
        <div className="text-[14px] font-normal w-[600px] mt-2 text-[#324473] w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </div>
      </div>
    </div>
  );
}
