import Star from "../assets/ant-design_star-filled.svg";

export default function Rating({ ManyStars = 5 }: { ManyStars?: number }) {
  const Many = Array.from({ length: ManyStars }).map((_, i) => (
    <img
      key={i}
      src={Star}
      className="w-fit h-fit inline-block pr-1"
      alt="rating"
    />
  ));
  return <>{Many}</>;
}
