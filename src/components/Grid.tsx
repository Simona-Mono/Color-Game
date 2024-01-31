import { ReactNode } from 'react';

interface GridProps {
  col: number;
  gap: number;
  children: ReactNode;
}
export default function Grid(props: GridProps) {
// console.log(props.col, props.gap)

  const gridStyle = {
   display: 'grid',
   gridTemplateColumns: `repeat(${props.col}, 1fr)`,
   gap: `${props.gap}px`,
 };

  // check if props.children is an array or a single obj before mapping
  const renderChildren = Array.isArray(props.children) ? 
    props.children.map((child, index) => (
    <div key={index} className="grid-item">
      {child}
    </div>
  )) : props.children;

    return (     
      <div style={gridStyle}>
        {renderChildren}
      </div>
    );
  }

