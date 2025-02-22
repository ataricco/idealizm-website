type PillButtonProps = {
  colorIndex: number;
  onClick?: () => void;
  children: React.ReactNode;
};

const colorClasses: string[] = [
  "bg-slate-50",
  "bg-slate-100",
  "bg-slate-200",
  "bg-slate-300",
  "bg-slate-400",
  "bg-slate-500",
  "bg-slate-600",
  "bg-slate-700",
  "bg-slate-800",
  "bg-slate-900",
];

// determines the color of the text on the button based on the color of the button
const getTextColor = (colorIndex: number): string => {
  if (colorIndex > 4) {
    return "text-white";
  } else {
    return "text-black";
  }
};

// takes color as a prop color is supposed to be a value from 0-9
// the greater the value, the darker the color form white to black, this is because of tailwind's deault color palette
// if color is not provided, it defaults to 50 (white)
export default function PillButton(props: PillButtonProps) {
  const { colorIndex = 0, onClick } = props;
  const hoverColor = Object.keys(colorClasses).length - 1 - colorIndex;

  console.log(hoverColor, typeof hoverColor);
  return (
    <button
      className={`p-2 ${colorClasses[colorIndex]} ${getTextColor(
        colorIndex
      )} rounded-full shadow-md hover:${
        colorClasses[hoverColor]
      } hover:${getTextColor(
        hoverColor
      )} transition-colors duration-300 ease-in-out`}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}
