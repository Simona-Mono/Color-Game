interface SquareProps {
  color: string;
  onClick: () => void;
}
export default function Square(props: SquareProps) {

  return (
    <div 
    className="rounded-md h-48 cursor-pointer transition ease-in-out delay-75" 
    style={{ background: props.color }} 
    onClick={props.onClick}
    >
    </div>
  );
};

