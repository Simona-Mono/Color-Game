import { useContext } from "react";
import { GameStateContext } from "../../contexts/GameStateContext";
import { ColorContext } from "../../contexts/ColorContext";
import { hexToHsl, hexToRgb } from "../../utils/colorUtils";

  export default function Header() {
    const { selectedModel, gameState } = useContext(GameStateContext);
    const { colors, secretIndex } = useContext(ColorContext);
    const headerBackground = gameState === 'won' ? colors[secretIndex] : 'steelblue';

    const getColorModel = () => {
      let currentColorModel = '';
  
      switch (selectedModel) {
        case 'HEX':
          currentColorModel = 'HEX ' + colors[secretIndex];
          break;
        case 'RGB':
          currentColorModel = hexToRgb(colors[secretIndex]);
          break;
        case 'HSL':
          currentColorModel = hexToHsl(colors[secretIndex]);
          break;
        default:
          currentColorModel = 'HEX ' + colors[secretIndex];
      }
    
      return currentColorModel;
    };
  
    return (
        <header className='home__header' style={{ background: headerBackground }}>
          <h1 className='header__title'>
            MONO'S
            <span className='title__color-name'> {getColorModel()}</span>
            COLOR GAME
          </h1>
        </header>
      );
  };