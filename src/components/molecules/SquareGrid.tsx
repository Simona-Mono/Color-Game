import { useContext } from 'react';
import GridItem from '../atoms/GridItem';
import Square from '../atoms/Square';
import { ColorContext } from '../../contexts/ColorContext';
import { GameStateContext } from '../../contexts/GameStateContext';

interface GridProps {
  col: number;
  gap: number;
}
export default function SquareGrid(props: GridProps) {
  const { colors, setColors, secretIndex } = useContext(ColorContext);
  const { gameState, setGameState } = useContext(GameStateContext);

  const gridStyle = {
   display: 'grid',
   gridTemplateColumns: `repeat(${props.col}, 1fr)`,
   gap: `${props.gap}px`,
 };

 const handleColorClick = (colorIndex: number) => {
 // console.log("Clicked color index:", colorIndex);
 // console.log("Secret index:", secretIndex);

  if (gameState === 'won') return;

  const newColors = colors.map((color, index) => {
    if (index === colorIndex && color !== colors[secretIndex]) {
      return 'none';
    }
    return color;
  });
  const newGameState = (colorIndex === secretIndex) ? 'won' : 'wrong';

  if (newGameState === 'won') {
    newColors.fill(colors[secretIndex]);
  }
 // console.log("New colors:", newColors);
  setColors(newColors);
  setGameState(newGameState);
};

    return (     
      <div style={gridStyle}>
      {colors.map((c, i) => (
        <GridItem key={i}>
          <Square color={c} onClick={() => handleColorClick(i)} />
        </GridItem>
      ))}
    </div>
    );
  }

