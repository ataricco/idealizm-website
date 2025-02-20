type iconProps = {
  icon: string;
  handleClick: () => void;
};

export default function BarIcon({ icon, handleClick }: iconProps) {
  return (
    <div className="fixed top-0 left-0 w-16 h-16" onClick={handleClick}>
      <img
        className="w-full, h-full object-contain"
        src={icon}
        alt="menu icon"
      />
    </div>
  );
}
