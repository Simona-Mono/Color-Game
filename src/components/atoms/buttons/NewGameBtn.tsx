import { useContext } from "react";
import { GameStateContext } from "../../../contexts/GameStateContext";

interface NewGameBtnPorps {
    text: string;
  }
  export default function NewGameBtn(props: NewGameBtnPorps) {
    const { startNewGame } = useContext(GameStateContext);
  
    return (
        <button onClick={startNewGame} className='actions__button'>
          {props.text}
        </button>
      );
  };