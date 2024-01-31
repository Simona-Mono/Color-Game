import { ReactNode } from 'react';

interface GridProps {
  col: string;
  gap: string;
  children: ReactNode;
}
export default function Grid(props: GridProps) {
 // console.log(props.col, props.gap)

    // check if props.children is an array or a single obj before mapping
    const renderChildren = Array.isArray(props.children) ? 
      props.children.map((child, index) => (
      <div key={index} className="grid-item">
        {child}
      </div>
    )) : props.children;

    return (     
      <div className={`grid ${props.col} ${props.gap}`}>
        {renderChildren}
      </div>
    );
  }

