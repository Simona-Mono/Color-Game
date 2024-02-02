import { useContext, useEffect } from 'react';
import Header from '../components/organisms/Header';
import { GameStateContext } from '../contexts/GameStateContext';
import GameActions from '../components/organisms/GameActions';
import GameArea from '../components/organisms/GameArea';

export default function Home() {
  const { difficulty, selectedRange, startNewGame } = useContext(GameStateContext);
  
  useEffect(() => {
    startNewGame();
  }, [difficulty, selectedRange]); // re-start game when changing difficulty or range

  return (
    <main className='home'>
      <Header />
     <GameActions />
      <GameArea />
    </main>
  );
}
