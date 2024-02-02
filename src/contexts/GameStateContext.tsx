import React, { createContext, useContext, useState } from 'react';
import { ColorContext } from './ColorContext';
import { randomColor, randomColorNuance } from '../utils/colorUtils';

type GameStateContextType = {
    startNewGame: () => void;
    gameState: string;
    setGameState: React.Dispatch<React.SetStateAction<string>>;
    gridColumns: number;
    setGridColumns: React.Dispatch<React.SetStateAction<number>>;
    difficulty: number;
    setDifficulty: React.Dispatch<React.SetStateAction<number>>;
    selectedModel: string;
    setSelectedModel: React.Dispatch<React.SetStateAction<string>>;
    selectedRange: string;
    setSelectedRange: React.Dispatch<React.SetStateAction<string>>;

  };

export const GameStateContext = createContext<GameStateContextType>({
    startNewGame: () => {},
    gameState: 'start',
    setGameState: () => {},
    gridColumns: 3,
    setGridColumns: () => {},
    difficulty: 9,
    setDifficulty: () => {},
    selectedModel: '',
    setSelectedModel: () => {},
    selectedRange: 'Classic',
    setSelectedRange: () => {}
  });

type Props = {
  children: React.ReactNode;
};

export const GameStateProvider = ({ children }: Props) => {
    const { setColors, setSecretIndex } = useContext(ColorContext);
    const [gameState, setGameState] = useState<string>('start');
    const [gridColumns, setGridColumns] = useState<number>(3);
    const [difficulty, setDifficulty] = useState<number>(9);
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedRange, setSelectedRange] = useState('Classic');

  const startNewGame = () => {
    const newColors = generateColors(difficulty);
    const newSecretIndex = Math.floor(Math.random() * difficulty);
    setColors(newColors);
    setSecretIndex(newSecretIndex);
    setGameState('start');;
  };

  const generateColors = (difficultyNum: number) => {
    const generatedColors: Set<string> = new Set(); 
    const baseColor = randomColor(); // for nuances

    while (generatedColors.size < difficultyNum) {
        let colorToAdd = selectedRange === 'Classic' ? randomColor() : randomColorNuance(baseColor);
        generatedColors.add(colorToAdd);
    }
    return Array.from(generatedColors);
  };

  const contextValue: GameStateContextType = {
    startNewGame,
    gameState,
    setGameState,
    gridColumns,
    setGridColumns,
    difficulty,
    setDifficulty,
    selectedModel,
    setSelectedModel,
    selectedRange,
    setSelectedRange
  };

  return (
    <GameStateContext.Provider value={contextValue}>
      {children}
    </GameStateContext.Provider>
  );
};
