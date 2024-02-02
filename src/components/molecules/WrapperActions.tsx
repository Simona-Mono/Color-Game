import { useContext } from "react";
import { GameStateContext } from "../../contexts/GameStateContext";
import NewGameBtn from "../atoms/buttons/NewGameBtn";
import DifficultyBtn from "../atoms/buttons/DifficultyBtn";
import DropDownBtn from "../atoms/buttons/DropDownBtn";
import Slider from "../atoms/Slider";

export default function WrapperActions() {
const { 
    gridColumns, 
    gameState, 
    difficulty, 
    setSelectedModel, 
    setSelectedRange, 
    setGridColumns 
} = useContext(GameStateContext);

const newGameText = gameState === 'won' ? 'New game?' : 'New colors';
const message = gameState === 'won' ? 'Correct :)' : gameState === 'wrong' ? 'Wrong :(' : '';

const handleModelOptionSelect = (option: string) => {
    setSelectedModel(option);
  };

  const handleRangeOptionSelect = (option: string) => {
    setSelectedRange(option);
  };

  const handleSliderChange = (value: number) => {
    setGridColumns(value);
  };

  return (
    <div className='actions'>
    <NewGameBtn text={newGameText} />
    <span className='actions__message'>{message}</span>
    <div className='container'>
      <DifficultyBtn
        active={difficulty === 3}
        difficulty={3}
        text="EASY"
      />
      <DifficultyBtn
        active={difficulty === 9}
        difficulty={9}
        text="HARD"
      />
      <DropDownBtn
        options={['HEX', 'RGB', 'HSL']}
        selectedOption='HEX'
        onSelect={handleModelOptionSelect}
      />
      <DropDownBtn
        options={['Close', 'Classic']}
        selectedOption='Classic'
        onSelect={handleRangeOptionSelect}
      />
      <Slider max={6} value={gridColumns} onChange={handleSliderChange} />
    </div>
  </div>
    
  );
}