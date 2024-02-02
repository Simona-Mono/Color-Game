import './App.css';
import { ColorProvider } from './contexts/ColorContext';
import { GameStateProvider } from './contexts/GameStateContext';
import Home from './pages/Home';

function App() {

  return (
    <>
    <ColorProvider>
    <GameStateProvider>
    <Home/>
    </GameStateProvider>
    </ColorProvider>
    </>
  );
}

export default App;
