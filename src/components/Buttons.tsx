export function HelpMe({ className }: { className?: string }) {
  return (
    <button
      className={`w-auto text-sm h-[40px] md:h-auto py-1 px-12 block my-6 mx-auto bg-[#5180F6] hover:bg-[#0d3aab] hover:cursor-pointer text-white rounded-[70px] md:py-6 md:px-23 md:text-2xl font-bold ${className}`}
    >
      Help me
    </button>
  );
}

export function Experts() {
  return (
    <button className="w-auto h-[40px] md:h-auto mx-auto text-sm bg-[#6d91ee] px-8 py-0 hover:bg-[#5180F6] hover:cursor-pointer text-white rounded-[20px] md:py-2 md:px-10 md:mt-[4rem] md:text-2xl">
      Experts
    </button>
  );
}

export function Send() {
  return (
    <button
      type="submit"
      className="w-auto block hover:bg-[#5180F6] hover:cursor-pointer mx-auto bg-white font-normal text-[18px] text-black rounded-[60px] py-2 px-10 mt-[4rem] text-2xl border-[#5180F6] border-3"
    >
      Send
    </button>
  );
}
