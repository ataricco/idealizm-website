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
      <img
        className="w-full h-full object-contain"
        src={icon}
        alt=""
        aria-hidden="true"
      />
    </button>
  );
}
