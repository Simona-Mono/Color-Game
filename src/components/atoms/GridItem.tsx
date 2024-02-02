import React from 'react';

interface GridItemProps {
  children: React.ReactNode;
}

export default function GridItem(props: GridItemProps) {
  return <div className="grid__item">{props.children}</div>;
}

