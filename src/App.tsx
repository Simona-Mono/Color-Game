import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [colors, setColors] = useState<string[]>([]);
  const [secretIndex, setSecretIndex] = useState<number>(0);
  const [gameState, setGameState] = useState<string>('start');
  const [difficulty, setDifficulty] = useState<number>(9);

  const headerBackground = gameState === 'won' ? colors[secretIndex] : 'steelblue';
  const newGameText = gameState === 'won' ? 'New game?' : 'New colors';
  const message = gameState === 'won' ? 'Correct :)' : gameState === 'wrong' ? 'Wrong :(' : '';

  const squares = colors.map((c, i) => (
  <div className="square" style={{ background: c }} onClick={() => handleColorClick(i)} key={i}></div>
  ));

  useEffect(() => {
    newGame();
  }, [difficulty]); // re-start game when changing difficulty

  const generateColors = (difficultyNum: number) => {
    const newColors: string[] = [];
    const generatedColors: Set<string> = new Set();
  
    while (newColors.length < difficultyNum) {
      const color = randomColor();
      if (!generatedColors.has(color)) {  // check that there are no duplicate colors
        newColors.push(color);
        generatedColors.add(color);
      }
    }
  
    return newColors;
  };

  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    return '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
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

  const newGame = () => {
    const newColors = generateColors(difficulty);
    const newSecretIndex = Math.floor(Math.random() * difficulty);
    setColors(newColors);
    setSecretIndex(newSecretIndex);
    setGameState('start');
  };

  return (
    <div className="container">
      <header style={{ background: headerBackground }}>
        <h1>
          Mono's
          <span>{colors[secretIndex]}</span>
          color game
        </h1>
      </header>
      <div className="actions flex">
        <button onClick={newGame}>{newGameText}</button>
        <span className="message">{message}</span>
        <button className={difficulty === 3 ? 'active' : ''} onClick={() => changeDifficulty(3)}>
          Easy
        </button>
        <button className={difficulty === 9 ? 'active' : ''} onClick={() => changeDifficulty(9)}>
          Hard
        </button>
      </div>
      <main>
        <div className="squares flex">
          {squares}
        </div>
        </main>
    </div>
  );
}

export default App;
