import Image from "next/image";

type iconProps = {
  icon: string;
  handleClick: () => void;
};

export default function BarIcon({ icon, handleClick }: iconProps) {
  return (
    <button
      className="fixed top-0 left-0 w-16 h-16 focus:outline-none focus-visible:ring-2 focus-visible:ring-blueText rounded"
      onClick={handleClick}
      aria-label="Menu"
    >
      <Image
        className="w-full h-full object-contain"
        src={icon}
        alt=""
        width={64}
        height={64}
        aria-hidden="true"
      />
    </button>
  );
}
