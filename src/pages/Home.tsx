import { useEffect, useState } from 'react';
import Grid from '../components/Grid';
import Square from '../components/Square';
import DifficultyBtn from '../components/buttons/DifficultyBtn';
import Header from '../components/Header';
import NewGameBtn from '../components/buttons/NewGameBtn';
import DropDownBtn from '../components/buttons/DropDownBtn';
import { randomColor, hexToRgb, hexToHsl, randomColorNuance } from '../utils/colorUtils';
import Slider from '../components/Slider';

export default function Home() {
  const [colors, setColors] = useState<string[]>([]);
  const [secretIndex, setSecretIndex] = useState<number>(0);
  const [gameState, setGameState] = useState<string>('start');
  const [difficulty, setDifficulty] = useState<number>(9);
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedRange, setSelectedRange] = useState('Classic');
  const [gridColumns, setGridColumns] = useState<number>(3);

  const headerBackground = gameState === 'won' ? colors[secretIndex] : 'steelblue';
  const newGameText = gameState === 'won' ? 'New game?' : 'New colors';
  const message = gameState === 'won' ? 'Correct :)' : gameState === 'wrong' ? 'Wrong :(' : '';
  
  useEffect(() => {
    newGame();
  }, [difficulty, selectedRange]); // re-start game when changing difficulty or range

  const generateColors = (difficultyNum: number) => {
    const generatedColors: Set<string> = new Set(); 
    const baseColor = randomColor(); // for nuances

    while (generatedColors.size < difficultyNum) {
        let colorToAdd = selectedRange === 'Classic' ? randomColor() : randomColorNuance(baseColor);
        generatedColors.add(colorToAdd);
    }

    return generatedColors;
};

  const getColorModel = () => {
    let colorModel = '';
  
    switch (selectedModel) {
      case 'HEX':
        colorModel = 'HEX ' + colors[secretIndex];
        break;
      case 'RGB':
        colorModel = hexToRgb(colors[secretIndex]);
        break;
      case 'HSL':
        colorModel = hexToHsl(colors[secretIndex]);
        break;
      default:
        colorModel = 'HEX ' + colors[secretIndex];
    }
  
    return colorModel;
  };

  const handleColorClick = (i: number) => {
    if (gameState === 'won') return;

    const newColors = colors.map((color, index) => (index === i && color !== colors[secretIndex]) ? 'none' : color);
    const newGameState = (i === secretIndex) ? 'won' : 'wrong';

    if (newGameState === 'won') {
      newColors.fill(colors[secretIndex]);
    }

    setColors(newColors);
    setGameState(newGameState);
  };

  const changeDifficulty = (newDifficulty: number) => {
    setDifficulty(newDifficulty);
  };

  const handleModelOptionSelect = (option: string) => {
    setSelectedModel(option);
  };

  const handleRangeOptionSelect = (option: string) => {
    setSelectedRange(option);
  };

  const handleSliderChange = (value: number) => {
    setGridColumns(value);
  };

  const newGame = () => {
    const newColors = generateColors(difficulty);
    const newSecretIndex = Math.floor(Math.random() * difficulty);
    setColors([...newColors]);
    setSecretIndex(newSecretIndex);
    setGameState('start');
  };

  return (
    <div className='flex flex-col h-screen'>
       {/* Header */}
       <Header 
        colorModel={getColorModel()} 
        backgroundColor={headerBackground} 
       />

      {/* Action Buttons */}
      <div className="flex justify-between items-center mx-auto bg-white text-customblue-50">
        <NewGameBtn onClick={newGame} text={newGameText} />
        <span className="text-center text-black w-48">{message}</span>
        <div className='flex'>
          <DifficultyBtn
            active={difficulty === 3}
            onClick={() => changeDifficulty(3)}
            text="EASY"
          />
          <DifficultyBtn
            active={difficulty === 9}
            onClick={() => changeDifficulty(9)}
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
          {/* Slider */}
          <Slider max={6} value={gridColumns} onChange={handleSliderChange} />
        </div>
      </div>

      {/* Main Content */}
      <main className='h-full overflow-scroll bg-gray-800'>
        <div className='max-w-3xl py-8 mx-auto'>
          <Grid col={gridColumns} gap={12}>
            {colors.map((c, i) => (
              <Square key={i} color={c} onClick={() => handleColorClick(i)} />
            ))}
          </Grid>
        </div>
      </main>
    </div>
  );
}
