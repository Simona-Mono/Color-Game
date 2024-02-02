interface SquareProps {
  color: string;
  onClick: () => void;
}
export default function Square(props: SquareProps) {

  return (
    <div 
    className='item__square'
    style={{ background: props.color }} 
    onClick={props.onClick}
    >
      &nbsp;
    </div>
  );
};

